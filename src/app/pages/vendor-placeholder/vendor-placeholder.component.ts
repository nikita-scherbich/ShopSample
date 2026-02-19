import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vendor-placeholder',
  standalone: true,
  imports: [CommonModule],
  template: `<h2>Vendor Portal Placeholder</h2>`,
  styles: [`
    h2 {
      color: #333;
      font-family: Arial, sans-serif;
    }
  `]
})
export class VendorPlaceholderComponent {}
