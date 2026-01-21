import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shipment-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shipment-history.html',
  styleUrl: './shipment-history.css',
})
export class ShipmentHistory {
  @Input() history: any[] = [];
}
