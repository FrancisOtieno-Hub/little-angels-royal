import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL = "https://hnpcxhswrvnxfxbnzeia.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhucGN4aHN3cnZueGZ4Ym56ZWlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzNDk3NjgsImV4cCI6MjA4NTkyNTc2OH0.EsyGY1y1mwznII8wH8_B_A3Upyf_FdRd35V10R-wzhM";

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
