import { Routes } from '@angular/router';
import { MainLayoutComponent } from './components';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    data: { pageTitle: 'Maras,co Home Page' },
  },
  { path: '**', pathMatch: 'full', redirectTo: '/' },
];
