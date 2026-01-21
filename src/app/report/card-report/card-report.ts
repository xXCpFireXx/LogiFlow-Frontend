import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-report',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-report.html',
  styleUrl: './card-report.css',
})
export class CardReport {
  titulo = input<string>();
  valor = input<string>();
  description = input<string>();
  icon = input<string>();
}
