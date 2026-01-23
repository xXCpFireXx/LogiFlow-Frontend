import { Routes } from '@angular/router';
import { MainLayout } from './core/layout/main-layout/main-layout';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./login/login').then(m => m.Login),
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register').then(m => m.Register),
  },
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
        path: 'tracking',
        loadComponent: () =>
          import('./tracking/tracking').then(m => m.Tracking),
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
