import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { MetricCardClients } from '../../models/Clients';

@Component({
  selector: 'app-clients-card',
  imports: [CommonModule],
  templateUrl: './clients-card.html',
  styleUrl: './clients-card.css',
})
export class ClientsCard {
  data = input.required<MetricCardClients>();
}
