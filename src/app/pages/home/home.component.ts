import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `<h2>Welcome Home!</h2>`,
  styles: [`
    h2 {
      color: #333;
      font-family: Arial, sans-serif;
    }
  `]
})
export class HomeComponent {}
