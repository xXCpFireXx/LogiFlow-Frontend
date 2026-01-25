import { Component, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserProfileNav } from '../../../shared/user-profile-nav/user-profile-nav';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [UserProfileNav],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  @Output() toggleMenu = new EventEmitter<void>(); // Emisor para el botón
}
