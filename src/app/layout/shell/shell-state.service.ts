import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShellStateService {
  private _isSidebarOpen = signal<boolean>(true);
  isSidebarOpen = this._isSidebarOpen.asReadonly();

  toggleSidebar() {
    this._isSidebarOpen.update(value => !value);
  }
}
