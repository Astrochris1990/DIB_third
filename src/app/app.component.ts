import { Component, OnInit } from '@angular/core';
import { SupabaseService } from './supabase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  supabaseData: any[] = []; // Hier speichern wir die abgerufenen Daten

  constructor(private supabaseService: SupabaseService) {}

  async ngOnInit(): Promise<void> {
    await this.loadSupabaseData();
  }

  async loadSupabaseData(): Promise<void> {
    try {
      const response = await this.supabaseService.getSupabaseClient()
        .from('DIB')
        .select('*');

      if (response.data) {
        this.supabaseData = response.data;
        console.log(this.supabaseData);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
}