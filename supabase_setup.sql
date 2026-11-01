-- ==============================================================================
-- 🚀 SUPABASE DATABASE SETUP FOR NEW JA PORTFOLIO
-- Project Ref: nbmjzhhvpksbxvqcxjpn
-- Run this script in your Supabase SQL Editor:
-- https://supabase.com/dashboard/project/nbmjzhhvpksbxvqcxjpn/sql/new
-- ==============================================================================

-- 1. Create Comments Table
CREATE TABLE IF NOT EXISTS public.comments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  message TEXT NOT NULL,
  avatar TEXT,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- 2. Create Portfolio Settings Table
CREATE TABLE IF NOT EXISTS public.portfolio_settings (
  key TEXT PRIMARY KEY,
  value JSONB NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- 3. Create Realtime Likes Table
CREATE TABLE IF NOT EXISTS public.likes (
  id TEXT PRIMARY KEY,
  count INTEGER DEFAULT 0 NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- 4. Create Visitor Tracking Table
CREATE TABLE IF NOT EXISTS public.visitors (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  visitor_id TEXT NOT NULL UNIQUE,
  first_visit TIMESTAMPTZ DEFAULT now() NOT NULL,
  last_visit TIMESTAMPTZ DEFAULT now() NOT NULL,
  page_views INTEGER DEFAULT 1 NOT NULL,
  preferred_lang TEXT DEFAULT 'th',
  timezone TEXT DEFAULT 'Asia/Bangkok',
  referrer TEXT,
  screen_res TEXT
);

-- 5. Enable Row Level Security (RLS)
ALTER TABLE public.comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.portfolio_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.likes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.visitors ENABLE ROW LEVEL SECURITY;

-- 6. Policies for comments: Allow public read and insert, allow delete
DROP POLICY IF EXISTS "Allow public read comments" ON public.comments;
CREATE POLICY "Allow public read comments" ON public.comments
  FOR SELECT USING (true);

DROP POLICY IF EXISTS "Allow public insert comments" ON public.comments;
CREATE POLICY "Allow public insert comments" ON public.comments
  FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Allow delete comments" ON public.comments;
CREATE POLICY "Allow delete comments" ON public.comments
  FOR DELETE USING (true);

-- 7. Policies for portfolio_settings: Allow public read and write
DROP POLICY IF EXISTS "Allow public read settings" ON public.portfolio_settings;
CREATE POLICY "Allow public read settings" ON public.portfolio_settings
  FOR SELECT USING (true);

DROP POLICY IF EXISTS "Allow update settings" ON public.portfolio_settings;
CREATE POLICY "Allow update settings" ON public.portfolio_settings
  FOR ALL USING (true);

-- 8. Policies for likes: Allow public read and upsert
DROP POLICY IF EXISTS "Allow public read likes" ON public.likes;
CREATE POLICY "Allow public read likes" ON public.likes
  FOR SELECT USING (true);

DROP POLICY IF EXISTS "Allow public upsert likes" ON public.likes;
CREATE POLICY "Allow public upsert likes" ON public.likes
  FOR ALL USING (true);

-- 9. Policies for visitors: Allow public read and insert/update
DROP POLICY IF EXISTS "Allow public read visitors" ON public.visitors;
CREATE POLICY "Allow public read visitors" ON public.visitors
  FOR SELECT USING (true);

DROP POLICY IF EXISTS "Allow public insert visitors" ON public.visitors;
CREATE POLICY "Allow public insert visitors" ON public.visitors
  FOR ALL USING (true);

-- 10. Insert Default Initial Settings
INSERT INTO public.portfolio_settings (key, value)
VALUES 
  ('spotify', '{"title": "A little music. A lot of ideas.", "embed_url": "https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator&theme=0"}')
ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value;

-- 11. Insert Initial Welcome Comment
INSERT INTO public.comments (name, message, avatar)
VALUES
  ('New JA (Admin)', 'ยินดีต้อนรับสู่ Portfolio ของผมครับ! สามารถคอมเมนต์พูดคุยหรือติชมผลงานไว้ได้เลยครับ 👋🚀', 'NJ')
ON CONFLICT DO NOTHING;

-- 12. Insert Default Likes Rows
INSERT INTO public.likes (id, count)
VALUES
  ('j3a-store', 0),
  ('j3a-discord', 0),
  ('utcc-hackathon', 0),
  ('kmitl-hackathon', 0)
ON CONFLICT (id) DO NOTHING;

-- 13. Enable Realtime Replication for comments and likes tables
ALTER PUBLICATION supabase_realtime ADD TABLE public.comments;
ALTER PUBLICATION supabase_realtime ADD TABLE public.likes;
