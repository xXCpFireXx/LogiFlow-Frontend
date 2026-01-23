import { Routes } from '@angular/router';
import { MainLayout } from './core/layout/main-layout/main-layout';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./dashboard/dashboard').then(m => m.Dashboard),
      },
      {
        path: 'shipments',
        loadComponent: () =>
          import('./shipment/shipment').then(m => m.Shipment),
      },
      {
        path: 'tracking',
        loadComponent: () =>
          import('./tracking/tracking').then(m => m.Tracking),
      },
      {
        path: 'clients',
        loadComponent: () =>
          import('./client/client').then(m => m.Client),
      },
      {
        path: 'report',
        loadComponent: () =>
          import('./report/report').then(m => m.Report),
      },
      {
        path: 'setting',
        loadComponent: () =>
          import('./setting/setting').then(m => m.Setting),
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
