import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [AppComponent], 
  imports: [                     
    BrowserModule,                
    MatTabsModule    
  ],
  providers: [],
  bootstrap: [AppComponent]      
})
export class AppModule {}
