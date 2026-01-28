import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../auth.service';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './side-bar.html',
  styleUrl: './side-bar.css',
})
export class SideBar {
  @Input() isOpen: boolean = false; // Recibe el estado del padre
  @Output() closeSideBar = new EventEmitter<void>(); // Avisa al padre para cerrar

  private authService = inject(AuthService);
  private router = inject(Router);

  onNavigate() {
    this.closeSideBar.emit();
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
    this.closeSideBar.emit();
  }
}
