import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://pphzxxakslzzjaqfyhqm.supabase.co";

const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBwaHp4eGFrc2x6emphcWZ5aHFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyNDg3MTQsImV4cCI6MjA2NTgyNDcxNH0.svBSpIWEhhKRLLCUJVHKPZvQnAD7x-LrWHGLdwtT-L0";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;
