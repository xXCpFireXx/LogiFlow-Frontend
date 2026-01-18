import { Routes } from '@angular/router';
import { Header } from './components/header/header';
import { SideBar } from './components/side-bar/side-bar';
import { Tracking } from './pages/tracking/tracking'
import { Dashboard } from './pages/dashboard/dashboard';
import { Report } from './pages/report/report';
import { Setting } from './pages/setting/setting';

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
