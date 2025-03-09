import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {routes} from './app/app.routes';
import { importProvidersFrom } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



bootstrapApplication(AppComponent,
  {
    providers: [
      provideRouter(routes),
      importProvidersFrom(BrowserAnimationsModule, MatTabsModule)
    ]
  }
).catch(err => console.error(err));