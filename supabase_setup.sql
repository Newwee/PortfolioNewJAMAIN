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

-- 2. Create Portfolio Settings Table (for Spotify, Music, Dynamic Config)
CREATE TABLE IF NOT EXISTS public.portfolio_settings (
  key TEXT PRIMARY KEY,
  value JSONB NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- 3. Enable Row Level Security (RLS)
ALTER TABLE public.comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.portfolio_settings ENABLE ROW LEVEL SECURITY;

-- 4. Policies for comments: Allow public read and insert, allow anyone/service to delete
DROP POLICY IF EXISTS "Allow public read comments" ON public.comments;
CREATE POLICY "Allow public read comments" ON public.comments
  FOR SELECT USING (true);

DROP POLICY IF EXISTS "Allow public insert comments" ON public.comments;
CREATE POLICY "Allow public insert comments" ON public.comments
  FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Allow delete comments" ON public.comments;
CREATE POLICY "Allow delete comments" ON public.comments
  FOR DELETE USING (true);

-- 5. Policies for portfolio_settings: Allow public read and write
DROP POLICY IF EXISTS "Allow public read settings" ON public.portfolio_settings;
CREATE POLICY "Allow public read settings" ON public.portfolio_settings
  FOR SELECT USING (true);

DROP POLICY IF EXISTS "Allow update settings" ON public.portfolio_settings;
CREATE POLICY "Allow update settings" ON public.portfolio_settings
  FOR ALL USING (true);

-- 6. Insert Default Initial Settings
INSERT INTO public.portfolio_settings (key, value)
VALUES 
  ('spotify', '{"title": "A little music. A lot of ideas.", "embed_url": "https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator&theme=0"}')
ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value;

-- 7. Insert Initial Welcome Comment
INSERT INTO public.comments (name, message, avatar)
VALUES
  ('New JA (Admin)', 'ยินดีต้อนรับสู่ Portfolio ของผมครับ! สามารถคอมเมนต์พูดคุยหรือติชมผลงานไว้ได้เลยครับ 👋🚀', 'NJ')
ON CONFLICT DO NOTHING;

-- 8. Enable Realtime Replication for comments table
ALTER PUBLICATION supabase_realtime ADD TABLE public.comments;
