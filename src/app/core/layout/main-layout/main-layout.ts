import { Component, signal } from '@angular/core';
import { Header } from '../header/header';
import { SideBar } from '../side-bar/side-bar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, SideBar, Header],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {
  protected readonly title = signal('LogiFlow-Frontend');

  // Variable para controlar si el sidebar está abierto en móvil
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
