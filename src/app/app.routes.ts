import { Routes } from '@angular/router';
import { Header } from './core/layout/header/header';
import { SideBar } from './core/layout/side-bar/side-bar';
import { Tracking } from './tracking/tracking'
import { Dashboard } from './dashboard/dashboard';
import { Report } from './report/report';
import { Setting } from './setting/setting';

export const routes: Routes = [
  {
    path: '',
    component: Dashboard,
  },
  {
    path: 'tracking',
    component: Tracking,
  },
  {
    path: 'report',
    component: Report,
  },
  {
    path: 'setting',
    component: Setting,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
