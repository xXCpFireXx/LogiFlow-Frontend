import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../auth.service';
import { AppAvatar } from "../app-avatar/app-avatar";

@Component({
  selector: 'app-user-profile-nav',
  standalone: true,
  imports: [CommonModule, AppAvatar],
  templateUrl: './user-profile-nav.html',
  styleUrl: './user-profile-nav.css',
})
export class UserProfileNav {
  private authService = inject(AuthService);

  // Accedemos al Signal del servicio
  public user = this.authService.currentUser;
}
