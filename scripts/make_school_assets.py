import os
import math
import numpy as np
from PIL import Image, ImageDraw, ImageFont, ImageFilter

os.makedirs('assets', exist_ok=True)
os.makedirs('scripts', exist_ok=True)

# ─── 1. PROCESS NMRTUP LOGO ───────────────────────────────────────────
nmr_raw = Image.open('schoollogo/nmrtupweb-logo.jpg').convert('RGBA')
arr_nmr = np.array(nmr_raw)
h_nmr, w_nmr, _ = arr_nmr.shape
cx, cy, r = 1023.0, 1036.0, 970.0

y, x = np.ogrid[:h_nmr, :w_nmr]
dist = np.sqrt((x - cx)**2 + (y - cy)**2)

# Anti-aliased alpha mask for the outer circle
alpha_nmr = np.clip((r + 1.5 - dist) / 2.0, 0, 1) * 255.0
arr_nmr[..., 3] = alpha_nmr.astype(np.uint8)

nmr_cut = Image.fromarray(arr_nmr)
pad = 20
crop_box = (int(cx - r - pad), int(cy - r - pad), int(cx + r + pad), int(cy + r + pad))
nmr_cropped = nmr_cut.crop(crop_box)
nmr_logo = nmr_cropped.resize((512, 512), Image.Resampling.LANCZOS)
nmr_logo.save('assets/logo_nmrtup.png', 'PNG')
print('Saved assets/logo_nmrtup.png')

# ─── 2. PROCESS BANGPLEEPAT LOGO ──────────────────────────────────────
bpe_raw = Image.open('schoollogo/Bangpleepat.jpg').convert('RGB')
arr_bpe = np.array(bpe_raw)

# Crop to emblem
crop_bpe = arr_bpe[:996, :996]
diff_from_white = 255.0 - np.mean(crop_bpe, axis=-1)
alpha_bpe = np.clip(diff_from_white / 110.0, 0, 1) * 255.0

# Version A: Authentic Slate-Blue Logo
bpe_rgba = np.zeros((996, 996, 4), dtype=np.uint8)
bpe_rgba[..., :3] = crop_bpe
bpe_rgba[..., 3] = alpha_bpe.astype(np.uint8)
bpe_logo_authentic = Image.fromarray(bpe_rgba).resize((512, 512), Image.Resampling.LANCZOS)
bpe_logo_authentic.save('assets/logo_bangpleepat.png', 'PNG')
print('Saved assets/logo_bangpleepat.png')

# Version B: Cyberpunk Illuminated Cyan/White Logo (pops heavily on dark backgrounds)
bpe_cyber = np.zeros((996, 996, 4), dtype=np.uint8)
# Gradient fill: cyan (6, 182, 212) at top to white (240, 250, 255) in middle
for row in range(996):
    t = row / 996.0
    r_val = int(210 * (1 - t) + 245 * t)
    g_val = int(240 * (1 - t) + 250 * t)
    b_val = 255
    bpe_cyber[row, :, 0] = r_val
    bpe_cyber[row, :, 1] = g_val
    bpe_cyber[row, :, 2] = b_val

bpe_cyber[..., 3] = alpha_bpe.astype(np.uint8)
bpe_logo_cyber = Image.fromarray(bpe_cyber).resize((512, 512), Image.Resampling.LANCZOS)
bpe_logo_cyber.save('assets/logo_bangpleepat_cyber.png', 'PNG')
print('Saved assets/logo_bangpleepat_cyber.png')

# Also create a glowing circular badge version for Bangpleepat
badge_size = 512
badge_bpe = Image.new('RGBA', (badge_size, badge_size), (0, 0, 0, 0))
draw_badge = ImageDraw.Draw(badge_bpe)

# Dark glass circle
center_b = badge_size // 2
rad_b = 230
draw_badge.ellipse(
    [center_b - rad_b, center_b - rad_b, center_b + rad_b, center_b + rad_b],
    fill=(8, 17, 34, 240),
    outline=(6, 182, 212, 200),
    width=6
)
# Inner cyan glow ring
draw_badge.ellipse(
    [center_b - rad_b + 12, center_b - rad_b + 12, center_b + rad_b - 12, center_b + rad_b - 12],
    outline=(56, 189, 248, 120),
    width=2
)
# Paste cyan illuminated logo in center
logo_bpe_inner = bpe_logo_cyber.resize((360, 360), Image.Resampling.LANCZOS)
badge_bpe.paste(logo_bpe_inner, (center_b - 180, center_b - 180), logo_bpe_inner)
badge_bpe.save('assets/badge_bangpleepat.png', 'PNG')
print('Saved assets/badge_bangpleepat.png')

# Badge for NMRTUP
badge_nmr = Image.new('RGBA', (badge_size, badge_size), (0, 0, 0, 0))
draw_badge_n = ImageDraw.Draw(badge_nmr)
draw_badge_n.ellipse(
    [center_b - rad_b, center_b - rad_b, center_b + rad_b, center_b + rad_b],
    fill=(18, 10, 36, 240),
    outline=(217, 119, 6, 220), # gold
    width=6
)
draw_badge_n.ellipse(
    [center_b - rad_b + 12, center_b - rad_b + 12, center_b + rad_b - 12, center_b + rad_b - 12],
    outline=(168, 85, 247, 140), # purple
    width=2
)
logo_nmr_inner = nmr_logo.resize((430, 430), Image.Resampling.LANCZOS)
badge_nmr.paste(logo_nmr_inner, (center_b - 215, center_b - 215), logo_nmr_inner)
badge_nmr.save('assets/badge_nmrtup.png', 'PNG')
print('Saved assets/badge_nmrtup.png')

# ─── 3. BUILD 800x800 HD BOUNCE CARDS ─────────────────────────────────

def create_hd_bounce_card(
    filename,
    bg_gradient,
    border_color,
    badge_img,
    tag_text,
    school_name,
    school_sub,
    bullets,
    status_pill,
    accent_rgb
):
    W, H = 800, 800
    card = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    
    # 1. Gradient Background
    c1, c2 = bg_gradient
    for y_idx in range(H):
        t = y_idx / float(H)
        r_c = int(c1[0] * (1 - t) + c2[0] * t)
        g_c = int(c1[1] * (1 - t) + c2[1] * t)
        b_c = int(c1[2] * (1 - t) + c2[2] * t)
        for x_idx in range(W):
            card.putpixel((x_idx, y_idx), (r_c, g_c, b_c, 255))
    
    # 2. Cyber-grid overlay
    grid_layer = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    grid_draw = ImageDraw.Draw(grid_layer)
    grid_spacing = 40
    for gx in range(0, W, grid_spacing):
        grid_draw.line([(gx, 0), (gx, H)], fill=(255, 255, 255, 7), width=1)
    for gy in range(0, H, grid_spacing):
        grid_draw.line([(0, gy), (W, gy)], fill=(255, 255, 255, 7), width=1)
    
    # Radial ambient glow behind center badge
    glow = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow)
    cx_card, cy_card = W // 2, 350
    for r_glow in range(260, 40, -10):
        alpha_g = int(25 * (1.0 - (r_glow - 40) / 220.0))
        glow_draw.ellipse(
            [cx_card - r_glow, cy_card - r_glow, cx_card + r_glow, cy_card + r_glow],
            fill=(accent_rgb[0], accent_rgb[1], accent_rgb[2], alpha_g)
        )
    glow = glow.filter(ImageFilter.GaussianBlur(15))
    
    card = Image.alpha_composite(card, grid_layer)
    card = Image.alpha_composite(card, glow)
    
    # Fonts
    font_tag = ImageFont.truetype('C:/Windows/Fonts/segoeui.ttf', 20)
    font_name = ImageFont.truetype('C:/Windows/Fonts/tahoma.ttf', 32)
    font_sub = ImageFont.truetype('C:/Windows/Fonts/segoeui.ttf', 19)
    font_bullet = ImageFont.truetype('C:/Windows/Fonts/tahoma.ttf', 22)
    font_footer = ImageFont.truetype('C:/Windows/Fonts/segoeui.ttf', 20)
    
    draw = ImageDraw.Draw(card)
    
    # 3. Rounded border mask for card
    mask = Image.new('L', (W, H), 0)
    mask_draw = ImageDraw.Draw(mask)
    corner_radius = 44
    mask_draw.rounded_rectangle([0, 0, W, H], radius=corner_radius, fill=255)
    
    # Apply border stroke
    draw.rounded_rectangle([2, 2, W - 3, H - 3], radius=corner_radius, outline=border_color, width=4)
    # Inner subtle rim
    draw.rounded_rectangle([8, 8, W - 9, H - 9], radius=corner_radius - 6, outline=(255, 255, 255, 30), width=1)
    
    # 4. Top Tag Chip
    chip_w, chip_h = 360, 38
    chip_x = (W - chip_w) // 2
    chip_y = 36
    draw.rounded_rectangle(
        [chip_x, chip_y, chip_x + chip_w, chip_y + chip_h],
        radius=19,
        fill=(accent_rgb[0], accent_rgb[1], accent_rgb[2], 35),
        outline=accent_rgb + (140,),
        width=2
    )
    # Center text in chip
    bbox = font_tag.getbbox(tag_text)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    draw.text((chip_x + (chip_w - tw) // 2, chip_y + (chip_h - th) // 2 - 2), tag_text, fill=(240, 245, 255, 255), font=font_tag)
    
    # 5. School Title & Subtitle
    bbox = font_name.getbbox(school_name)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    draw.text(((W - tw) // 2, 92), school_name, fill=(255, 255, 255, 255), font=font_name)
    
    bbox = font_sub.getbbox(school_sub)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    draw.text(((W - tw) // 2, 138), school_sub, fill=(accent_rgb[0], accent_rgb[1], accent_rgb[2], 230), font=font_sub)
    
    # 6. Centerpiece Logo Badge
    badge_w, badge_h = 280, 280
    badge_resized = badge_img.resize((badge_w, badge_h), Image.Resampling.LANCZOS)
    badge_x = (W - badge_w) // 2
    badge_y = 180
    card.paste(badge_resized, (badge_x, badge_y), badge_resized)
    
    # 7. Holographic Cyber-Orbit rings around badge
    ring_draw = ImageDraw.Draw(card)
    center_ring_y = badge_y + badge_h // 2
    # Outer dashed orbit
    for angle in range(0, 360, 20):
        rad = math.radians(angle)
        rad_end = math.radians(angle + 12)
        r_orb = 160
        x1 = cx_card + int(r_orb * math.cos(rad))
        y1 = center_ring_y + int(r_orb * math.sin(rad))
        x2 = cx_card + int(r_orb * math.cos(rad_end))
        y2 = center_ring_y + int(r_orb * math.sin(rad_end))
        ring_draw.line([(x1, y1), (x2, y2)], fill=accent_rgb + (110,), width=2)
    
    # 8. Bullets / Education Highlights Box
    box_w, box_h = 700, 160
    box_x = (W - box_w) // 2
    box_y = 485
    ring_draw.rounded_rectangle(
        [box_x, box_y, box_x + box_w, box_y + box_h],
        radius=20,
        fill=(10, 16, 30, 200),
        outline=(255, 255, 255, 25),
        width=1
    )
    
    # Left vertical accent line on box
    ring_draw.line(
        [(box_x + 18, box_y + 20), (box_x + 18, box_y + box_h - 20)],
        fill=accent_rgb + (200,),
        width=4
    )
    
    # Bullets text
    by = box_y + 18
    for bullet in bullets:
        ring_draw.text((box_x + 38, by), bullet, fill=(225, 235, 245, 255), font=font_bullet)
        by += 44
    
    # 9. Bottom Footer Bar: Website & Status
    foot_y = 675
    # Status Pill on Left
    pill_w, pill_h = 320, 42
    pill_x = box_x
    ring_draw.rounded_rectangle(
        [pill_x, foot_y, pill_x + pill_w, foot_y + pill_h],
        radius=21,
        fill=(accent_rgb[0], accent_rgb[1], accent_rgb[2], 30),
        outline=accent_rgb + (160,),
        width=2
    )
    # Glowing dot inside pill
    ring_draw.ellipse([pill_x + 16, foot_y + 14, pill_x + 28, foot_y + 26], fill=(16, 185, 129, 255))
    ring_draw.text((pill_x + 38, foot_y + 8), status_pill, fill=(255, 255, 255, 255), font=font_tag)
    
    # Website Link on Right
    site_w, site_h = 320, 42
    site_x = box_x + box_w - site_w
    ring_draw.rounded_rectangle(
        [site_x, foot_y, site_x + site_w, foot_y + site_h],
        radius=21,
        fill=(255, 255, 255, 12),
        outline=(255, 255, 255, 45),
        width=1
    )
    site_text = "VISIT WEBSITE ↗"
    bbox = font_tag.getbbox(site_text)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    ring_draw.text((site_x + (site_w - tw) // 2, foot_y + 8), site_text, fill=(200, 220, 245, 255), font=font_tag)
    
    # Apply rounded corner mask
    final_card = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    final_card.paste(card, (0, 0), mask)
    final_card.save(filename, 'PNG')
    print(f'Saved {filename}')

# Generate Card 1: Bangpleepat
create_hd_bounce_card(
    filename='assets/school_bangpleepat.png',
    bg_gradient=((5, 12, 26), (10, 24, 48)),
    border_color=(6, 182, 212, 200),
    badge_img=badge_bpe,
    tag_text='✦ KINDERGARTEN & PRIMARY',
    school_name='รร.บางพลีพัฒนศึกษาลัย',
    school_sub='BANGPLEEPAT SCHOOL (SAMUT PRAKAN)',
    bullets=[
        '• อนุบาล 1 - 3 (ปฐมวัย & พื้นฐานการเรียนรู้)',
        '• ประถมศึกษาปีที่ 1 - 6 (ป.1 - ป.6)',
        '• จุดเริ่มต้นความหลงใหลในคอมพิวเตอร์ & ฝึกเขียนโปรแกรม'
    ],
    status_pill='STATUS: GRADUATED',
    accent_rgb=(6, 182, 212)
)

# Generate Card 2: NMRTUP
create_hd_bounce_card(
    filename='assets/school_nmrtup.png',
    bg_gradient=((15, 8, 30), (28, 14, 52)),
    border_color=(168, 85, 247, 200),
    badge_img=badge_nmr,
    tag_text='★ SECONDARY & HIGH SCHOOL',
    school_name='รร.นวมินทราชินูทิศ เตรียมอุดมศึกษาพัฒนาการ',
    school_sub='NMRTUP SCHOOL (GRADE 7 - 12)',
    bullets=[
        '• มัธยมศึกษาตอนต้น (ม.1 - ม.3)',
        '• มัธยมศึกษาตอนปลาย (ม.4 - ม.6 สายวิทย์-คณิต)',
        '• หัวหน้าทีมพัฒนาเว็บไซต์ & คว้าชัยชนะเลิศระดับประเทศ'
    ],
    status_pill='CURRENT: GRADE 12 (ม.6)',
    accent_rgb=(168, 85, 247)
)

print('All school assets generated successfully!')
