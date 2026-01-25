import { Component, computed, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-avatar.html',
  styleUrl: './app-avatar.css',
})
export class AppAvatar {
  fullName = input.required<string>();
  avatarColor = input<string>();
  size = input<string>('w-10 h-10');
  shape = input<'square' | 'circle'>('square');

  // Esta lógica extrae las iniciales para el SVG
  initials = computed(() => {
    const name = this.fullName().trim();
    if (!name) return '??';

    const parts = name.split(/\s+/);
    if (parts.length === 1) return parts[0].charAt(0).toUpperCase();

    // Toma la primera letra del primer nombre y del último apellido
    return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
  });
}
