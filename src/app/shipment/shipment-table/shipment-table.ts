import { Component, computed, input, signal } from '@angular/core';
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
  // Input: Lista original de envíos
  shipments = input.required<Shipment[]>();

  // Estado: Término de búsqueda
  searchTerm = signal<string>('');

  // Estado: Control del dropdown de acciones
  activeDropdownId = signal<string | null>(null);

  // Lógica: Lista filtrada automáticamente
  filteredShipments = computed(() => {
    const term = this.searchTerm().toLowerCase();
    const list = this.shipments();

    // Si no hay búsqueda, devuelve la lista completa
    if (!term) return list;

    // Filtra por ID, Cliente, Origen o Destino
    return list.filter(shipment =>
      shipment.trackingId.toLowerCase().includes(term) ||
      shipment.customer.toLowerCase().includes(term) ||
      shipment.origin.toLowerCase().includes(term) ||
      shipment.destination.toLowerCase().includes(term)
    );
  });

  // Método para actualizar el término desde el input
  updateSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchTerm.set(input.value);
  }

  // Agrega estas propiedades
  dropdownPosition = signal({ x: 0, y: 0 });

  // Actualiza tu método toggleDropdown
  toggleDropdown(id: string, event: MouseEvent) {
    event.stopPropagation();

    if (this.activeDropdownId() === id) {
      this.activeDropdownId.set(null);
    } else {
      const button = event.currentTarget as HTMLElement;
      const rect = button.getBoundingClientRect();

      // ANCHO DEL MENÚ (w-44 = 11rem = 176px)
      const menuWidth = 176;

      this.dropdownPosition.set({
        x: rect.right - menuWidth,
        y: rect.bottom + 5
      });

      this.activeDropdownId.set(id);
    }
  }

  // Método para cerrar al hacer click fuera (opcional pero recomendado)
  closeDropdown() {
    this.activeDropdownId.set(null);
  }
}
