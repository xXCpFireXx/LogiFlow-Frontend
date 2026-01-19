import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card-report',
  imports: [],
  templateUrl: './card-report.html',
  styleUrl: './card-report.css',
})
export class CardReport {
  titulo = input<string>();
  valor = input<string>();
  description = input<string>();
  icon = input<string>();
}
