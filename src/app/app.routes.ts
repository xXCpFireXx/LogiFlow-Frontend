import { Routes } from '@angular/router';
import { Header } from './components/header/header';
import { SideBar } from './components/side-bar/side-bar';
import { Tracking } from './pages/tracking/tracking'
import { Dashboard } from './pages/dashboard/dashboard';
import { Report } from './pages/report/report';

export const routes: Routes = [
  // {
  //   path: 'header',
  //   component: Header,
  // },
  // {
  //   path: '',
  //   component: SideBar,
  // },
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
    path: '**',
    redirectTo: '',
  },
];
