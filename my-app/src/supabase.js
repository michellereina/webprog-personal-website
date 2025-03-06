import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bqbmzqufkgzzzgjtvlsj.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJxYm16cXVma2d6enpnanR2bHNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEyMjY1MTgsImV4cCI6MjA1NjgwMjUxOH0.--h9280rDQp-e9B8q8GgbX0t8lIaZAH5JHXixqSbIJg';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;