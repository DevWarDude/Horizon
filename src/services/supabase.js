import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabaseUrl = "https://pphzxxakslzzjaqfyhqm.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBwaHp4eGFrc2x6emphcWZ5aHFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyNDg3MTQsImV4cCI6MjA2NTgyNDcxNH0.svBSpIWEhhKRLLCUJVHKPZvQnAD7x-LrWHGLdwtT-L0";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
