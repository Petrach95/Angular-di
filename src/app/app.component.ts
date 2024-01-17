import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    RouterOutlet
  ],
  template: `
    <app-navbar />
    
    <div class="max-w-screen-md mx-auto">
      <router-outlet />
    </div>
  `,
})
export class AppComponent {

}