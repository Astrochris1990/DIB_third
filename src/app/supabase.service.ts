import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    const supabaseUrl = 'https://xprbdidrbxizacbfyqpv.supabase.co';
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhwcmJkaWRyYnhpemFjYmZ5cXB2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIyNzc4NjQsImV4cCI6MjAwNzg1Mzg2NH0.478FWP8MxeaUsSVPZ9tAhpvqoBM_L6-4keZwZDGlHG4'
    this.supabase = createClient(supabaseUrl, supabaseKey);
  }
  
    
  getSupabaseClient(): SupabaseClient {
    return this.supabase;
  }
}
