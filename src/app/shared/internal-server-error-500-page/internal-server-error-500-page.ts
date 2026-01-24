import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-internal-server-error-500-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './internal-server-error-500-page.html',
  styleUrl: './internal-server-error-500-page.css',
})
export class InternalServerError500Page implements OnInit, OnDestroy {
  private router = inject(Router);
  private timer: any;

  public errorContent = {
    code: '500',
    title: 'Internal Server Error',
    message: "We're sorry, but something went wrong on our end. Please try again later.",
    btnText: 'Back to Homepage',
    btnLink: '/dashboard',
  };

  ngOnInit(): void {
    // 10 segundos
    this.timer = setTimeout(() => {
      this.router.navigate([this.errorContent.btnLink]);
    }, 10000);
  }

  ngOnDestroy(): void {
    if (this.timer) clearTimeout(this.timer);
  }
}
