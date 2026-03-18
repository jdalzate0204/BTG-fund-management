import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'portal-fondos/web',
    pathMatch: 'full',
  },

  {
    path: 'portal-fondos/web',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
  },

  {
    path: 'portal-fondos/web/administrar-fondos',
    loadComponent: () => import('./pages/funds-inquiry/funds-inquiry.component').then((m) => m.FundsInquiryComponent),
  },
];
