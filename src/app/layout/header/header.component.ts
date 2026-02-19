import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellStateService } from '../shell/shell-state.service'; // Adjust path as needed

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private shellStateService: ShellStateService) {}

  toggleSidebar() {
    this.shellStateService.toggleSidebar();
  }
}
