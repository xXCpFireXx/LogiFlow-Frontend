import { Component, input, signal } from '@angular/core';
import { Shipment } from '../../models/Shipment';
import { Card } from "../../shared/card/card";
import { StatusBadge } from "../../shared/status-badge/status-badge";
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-shipment-table',
  imports: [Card, StatusBadge, DatePipe, CommonModule],
  templateUrl: './shipment-table.html',
  styleUrl: './shipment-table.css',
})
export class ShipmentTable {
  shipments = input.required<Shipment[]>();

  // Estado para controlar qué menú de acciones está abierto
  activeDropdownId = signal<string | null>(null);

  toggleDropdown(id: string) {
    // Si el ID ya está activo, lo cerramos (null), si no, lo abrimos
    this.activeDropdownId.update(current => current === id ? null : id);
  }
}
