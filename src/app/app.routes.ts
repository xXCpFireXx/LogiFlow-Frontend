import { Routes } from '@angular/router';
import { Header } from './components/header/header';
import { SideBar } from './components/side-bar/side-bar';
import { Tracking } from './pages/tracking/tracking'

export const routes: Routes = [
  {
    path: 'header',
    component: Header,
  },
  {
    path: '',
    component: SideBar,
  },
  {
    path: 'tracking',
    component: Tracking,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
