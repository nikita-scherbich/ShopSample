import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShellStateService } from '../shell/shell-state.service'; // Adjust path as needed

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  host: { '[class.open]': 'shellState.isSidebarOpen()' } // Add host binding for mobile view
})
export class SidebarComponent {
  constructor(public shellState: ShellStateService) {}
}
