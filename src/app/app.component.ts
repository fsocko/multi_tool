import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router'; 
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {routes} from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    RouterOutlet,
    MatTabsModule,
    CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'multi_tool';

  constructor(private router: Router) {}

  onTabChange(event: any) {
    const tabIndex = event.index;
    console.log('TAB', event.index);
    switch (tabIndex) {
      case 0:
        this.router.navigate(['/multi-tally']);
        break;
      case 1:
        this.router.navigate(['/multi-formula']);
        break;
      case 2:
        this.router.navigate(['/contact']);
        break;
    }
  }

  ngOnInit() {
    //Set a page on first visit.
    this.router.navigate(['/multi-tally']);
  }


  }
