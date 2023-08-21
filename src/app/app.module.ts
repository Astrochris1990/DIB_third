import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SupabaseService } from './supabase.service';


@NgModule({
  declarations: [
    AppComponent,
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    
  ],
  providers: [ SupabaseService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
