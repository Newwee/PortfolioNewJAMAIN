/* ==============================================================================
   🚀 Profanity Filter & Content Moderation System (Ported from J3ASTOREWEBSITE)
   Comprehensive Thai & English abusive word blocklist with Leetspeak / Unicode normalization
   ============================================================================== */

export const PROFANITY_WORDS = [
  'ไอเหี้ย', 'ไอ้เหี้ย', 'เหี้ย', 'เชี่ย', 'เชี้ย', 'ไอ้เชี่ย', 'สัส', 'สัด',
  'ไอ้สัส', 'ไอ้สัด', 'ไอัส', 'ไอสัส', 'สัตว์', 'ควย', 'ไอ้ควย', 'เย็ด', 'เยด',
  'ไอ้เย็ด', 'เย็ดแม่', 'เย็ดพ่อ', 'เย็ดมึง', 'หี', 'แตด', 'รูหี', 'หัวควย',
  'หัวดอ', 'ดอ', 'ดอกทอง', 'อีดอก', 'อีเหี้ย', 'อีสัส', 'อีควย', 'อีห่า',
  'อีแก่', 'อีเวร', 'อีชั่ว', 'ไอ้เวร', 'ไอ้ระยำ', 'ระยำ', 'ชาติหมา', 'ไอ้ชาติหมา',
  'ชาติชั่ว', 'ไอ้ชาติชั่ว', 'ส้นตีน', 'หน้าหมา', 'ไอ้หน้าหมา', 'หน้าส้นตีน',
  'ไอ้หน้าส้นตีน', 'แม่ง', 'แม่มึง', 'พ่อมึง', 'พ่อมึงตาย', 'แม่มึงตาย', 'พ่อแม่มึง',
  'พ่อแม่มึงตาย', 'พ่อมึงเป็นเหี้ย', 'แม่มึงเป็นเหี้ย', 'มึงตาย', 'ไอ้เลว', 'ไอ้ควาย',
  'โคตรโง่', 'ไอ้โง่', 'ไอ้หมา', 'ไอ้สถุน', 'สถุน', 'ถ่อย', 'อัปรีย์', 'จัญไร',
  'อีจัญไร', 'ห่า', 'ไอ้ห่า', 'เหี้ยมาก', 'โคตรเหี้ย', 'โคตรสัส', 'โคตรควย',
  'สัสเอ้ย', 'เหี้ยเอ้ย', 'ควยเอ้ย', 'ไอ้เหี้ยเอ้ย', 'ไอ้สัสเอ้ย', 'เย็ดเข้',
  'เย็ดแม่ง', 'เย็ดโคตร', 'ไปตาย', 'ไปตายซะ', 'ขอให้มึงตาย', 'ขอให้แม่มึงตาย',
  'ขอให้พ่อมึงตาย', 'ฆ่าตัวตาย', 'ตายห่า', 'ตายซะ', 'ไปลงนรก', 'สาปแช่ง',
  'fuck', 'fucker', 'fucking', 'bitch', 'shit', 'asshole', 'dick', 'pussy', 'cunt'
];

export const MASKED_PATTERNS = [
  /ค[\s*_\-.~#@$%^&*+=]+ย/i,
  /ค[\s*_\-.~#@$%^&*+=]*ว[\s*_\-.~#@$%^&*+=]*ย/i,
  /ไอ้?[\s*_\-.~#@$%^&*+=]*ค[\s*_\-.~#@$%^&*+=]*[ว*_\-.~#@$%^&*+=]*ย/i,
  /ไอ้?[\s*_\-.~#@$%^&*+=]*ั[\s*_\-.~#@$%^&*+=]*ส/i,
  /ส[\s*_\-.~#@$%^&*+=]+ส/i,
  /ส[\s*_\-.~#@$%^&*+=]+ด/i,
  /เหี้[\s*_\-.~#@$%^&*+=]+ย/i,
  /เ[\s*_\-.~#@$%^&*+=]*หี้[\s*_\-.~#@$%^&*+=]*ย/i,
  /เย็[\s*_\-.~#@$%^&*+=]+ด/i,
  /เ[\s*_\-.~#@$%^&*+=]*เย็[\s*_\-.~#@$%^&*+=]*ด/i
];

export function normalizeText(rawText) {
  if (!rawText) return '';
  let text = String(rawText).normalize('NFKC').toLowerCase();
  text = text.replace(/[\u200B-\u200D\uFEFF]/g, '');
  text = text
    .replace(/[0]/g, 'o')
    .replace(/[1]/g, 'i')
    .replace(/[3]/g, 'e')
    .replace(/[4]/g, 'a')
    .replace(/[5]/g, 's')
    .replace(/[@]/g, 'a')
    .replace(/[$]/g, 's');
  text = text.replace(/[_\-*.,\/\\#~`!%^&():;'"<>?+=\[\]{}|]/g, '');
  text = text.replace(/(.)\1{2,}/g, '$1$1');
  return text;
}

export function removeAllSpaces(text) {
  return String(text || '').replace(/\s+/g, '');
}

export function checkProfanity(text) {
  if (!text || !text.trim()) {
    return { hasProfanity: false };
  }

  for (const pattern of MASKED_PATTERNS) {
    if (pattern.test(text)) {
      return { hasProfanity: true, matchedWord: 'คำไม่สุภาพ (รูปแบบซ่อนคำ)' };
    }
  }

  const rawLower = text.toLowerCase();
  const normalized = normalizeText(text);
  const normalizedNoSpaces = removeAllSpaces(normalized);

  for (const badWord of PROFANITY_WORDS) {
    const cleanBadWord = removeAllSpaces(normalizeText(badWord));

    // Exclude false-positive contexts
    if (badWord === 'สัตว์') {
      if (
        rawLower.includes('สัตว์เลี้ยง') ||
        rawLower.includes('สัตว์ป่า') ||
        rawLower.includes('สัตว์น้ำ') ||
        rawLower.includes('สัตวแพทย์') ||
        rawLower.includes('สัตว์โลก')
      ) {
        continue;
      }
    }

    if (badWord === 'ดอ') {
      if (
        rawLower.includes('หัวดอ') ||
        rawLower.includes('ไอ้ดอ') ||
        rawLower.includes('อีดอ') ||
        /(^|\s)ดอ(\s|$)/.test(rawLower)
      ) {
        return { hasProfanity: true, matchedWord: badWord };
      }
      continue;
    }

    if (badWord === 'ดอก') {
      if (
        rawLower.includes('ดอกไม้') ||
        rawLower.includes('ดอกเบี้ย') ||
        rawLower.includes('ดอกบัว') ||
        rawLower.includes('ดอกกุหลาบ') ||
        rawLower.includes('ดอกเห็ด') ||
        rawLower.includes('ดอกมะลิ')
      ) {
        continue;
      }
      if (rawLower.includes('อีดอก') || rawLower.includes('ดอกทอง')) {
        return { hasProfanity: true, matchedWord: badWord };
      }
      if (/(^|\s)ดอก(\s|$)/.test(rawLower)) {
        return { hasProfanity: true, matchedWord: badWord };
      }
      continue;
    }

    if (badWord === 'หี') {
      if (rawLower.includes('หีบ') && !rawLower.includes('รูหี') && !rawLower.includes('อีหี')) {
        continue;
      }
    }

    if (badWord === 'กู') {
      if (rawLower.includes('กูเกิล') || rawLower.includes('กูเกิ้ล') || rawLower.includes('กู้')) {
        continue;
      }
      if (/(^|\s)กู(\s|$)/.test(rawLower) || rawLower.includes('ไอ้กู') || rawLower.includes('มึงกู')) {
        return { hasProfanity: true, matchedWord: badWord };
      }
      continue;
    }

    if (rawLower.includes(badWord.toLowerCase())) {
      return { hasProfanity: true, matchedWord: badWord };
    }

    if (normalized.includes(cleanBadWord)) {
      return { hasProfanity: true, matchedWord: badWord };
    }

    if (normalizedNoSpaces.includes(cleanBadWord)) {
      return { hasProfanity: true, matchedWord: badWord };
    }
  }

  return { hasProfanity: false };
}
