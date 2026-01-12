import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card-dashboard',
  imports: [],
  templateUrl: './card-dashboard.html',
  styleUrl: './card-dashboard.css',
})
export class CardDashboard {
titulo = input<string>();
  valor = input<string>();
  porcentaje = input<string>();
  icon = input<string>(); 
  isNegative = input<boolean>(false); 
}
