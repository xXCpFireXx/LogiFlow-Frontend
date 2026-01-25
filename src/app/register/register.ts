import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  // Validaciones del formulario
  registerForm = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  private getRandomColor(): string {
    const colors = ['137fec', '6366f1', 'ec4899', '8b5cf6', '10b981', 'f59e0b'];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const userData = {
        ...this.registerForm.value,
        activeShipment: Math.floor(Math.random() * 5000) + 1,
        status: 'Active',
        role: 'Admin',
        avatarColor: this.getRandomColor(),
      };

      this.authService.register(userData).subscribe({
        next: () => {
          this.router.navigate(['/login']);
        },
        error: (err) => console.error(err),
      });
    }
  }
}
