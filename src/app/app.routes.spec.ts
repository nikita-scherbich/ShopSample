import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { routes } from './app.routes';
import { ShellComponent } from './layout/shell/shell.component';
import { HomeComponent } from './pages/home/home.component';
import { CatalogPlaceholderComponent } from './pages/catalog-placeholder/catalog-placeholder.component';
import { VendorPlaceholderComponent } from './pages/vendor-placeholder/vendor-placeholder.component';
import { Component } from '@angular/core';

// Mock components for testing
@Component({ template: '' }) class MockHomeComponent {}
@Component({ template: '' }) class MockCatalogComponent {}
@Component({ template: '' }) class MockVendorComponent {}

describe('App Routing', () => {
  let router: Router;
  let fixture;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: '', component: MockHomeComponent },
          { path: 'home', component: MockHomeComponent },
          { path: 'catalog', component: MockCatalogComponent },
          { path: 'vendor', component: MockVendorComponent },
          // Include the ShellComponent if it's the top-level route component
          {
            path: '',
            component: ShellComponent, // Assuming ShellComponent is the main layout
            children: routes.find(r => r.component === ShellComponent)?.children || []
          }
        ]),
        ShellComponent,
        HomeComponent,
        CatalogPlaceholderComponent,
        VendorPlaceholderComponent,
      ],
      providers: [
        { provide: HomeComponent, useClass: MockHomeComponent },
        { provide: CatalogPlaceholderComponent, useClass: MockCatalogComponent },
        { provide: VendorPlaceholderComponent, useClass: MockVendorComponent },
      ]
    }).compileComponents();

    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(ShellComponent); // Or whatever the root component is
    router.initialNavigation();
  });

  it('should navigate to "" redirecting to "/home"', async () => {
    await router.navigateByUrl('');
    expect(router.url).toBe('/home');
  });

  it('should navigate to "/catalog"', async () => {
    await router.navigateByUrl('/catalog');
    expect(router.url).toBe('/catalog');
  });

  it('should navigate to "/vendor"', async () => {
    await router.navigateByUrl('/vendor');
    expect(router.url).toBe('/vendor');
  });
});
