import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-not-found-404-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './not-found-404-page.html',
  styleUrl: './not-found-404-page.css',
})
export class NotFoundComponent implements OnInit, OnDestroy {
  private router = inject(Router);
  private timer: any;

  public errorContent = {
    code: '404',
    title: "Something's missing.",
    message: "Sorry, we can't find that page. You'll find lots to explore on the home page.",
    btnText: 'Back to Homepage',
    btnLink: '/dashboard', // Ajusta esto a tu ruta principal
  };

  ngOnInit(): void {
    // 10 segundos
    this.timer = setTimeout(() => {
      console.log('Auto-redirecting to dashboard...');
      this.router.navigate([this.errorContent.btnLink]);
    }, 10000);
  }

  ngOnDestroy(): void {
    // Si el usuario hace clic en el botón antes de los 10s se cancela el timer
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }
}
