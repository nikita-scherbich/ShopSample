import { TestBed } from '@angular/core/testing';
import { ShellStateService } from './shell-state.service';

describe('ShellStateService', () => {
  let service: ShellStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShellStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have sidebar open by default', () => {
    expect(service.isSidebarOpen()).toBe(true);
  });

  it('should toggle sidebar open state', () => {
    // Initially open
    expect(service.isSidebarOpen()).toBe(true);

    service.toggleSidebar();
    expect(service.isSidebarOpen()).toBe(false); // Should be closed

    service.toggleSidebar();
    expect(service.isSidebarOpen()).toBe(true); // Should be open again
  });
});
