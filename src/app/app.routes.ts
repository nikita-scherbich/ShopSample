import { Routes } from '@angular/router';
import { ShellComponent } from './layout/shell/shell.component';
import { HomeComponent } from './pages/home/home.component';
import { CatalogPlaceholderComponent } from './pages/catalog-placeholder/catalog-placeholder.component';
import { VendorPlaceholderComponent } from './pages/vendor-placeholder/vendor-placeholder.component';

export const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'catalog',
        component: CatalogPlaceholderComponent
      },
      {
        path: 'vendor',
        component: VendorPlaceholderComponent
      }
    ]
  }
];
