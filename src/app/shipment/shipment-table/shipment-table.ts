import { Component, computed, inject, input, signal } from '@angular/core';
import { Shipment } from '../../models/Shipment';
import { Card } from "../../shared/card/card";
import { StatusBadge } from "../../shared/status-badge/status-badge";
import { CommonModule, DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipment-table',
  imports: [Card, StatusBadge, DatePipe, CommonModule],
  templateUrl: './shipment-table.html',
  styleUrl: './shipment-table.css',
})
export class ShipmentTable {
  private router = inject(Router);

  shipments = input.required<Shipment[]>();

  searchTerm = signal<string>('');
  activeDropdownId = signal<string | null>(null);
  dropdownPosition = signal({ x: 0, y: 0 });

  filteredShipments = computed(() => {
    const term = this.searchTerm().toLowerCase();
    const list = this.shipments();

    if (!term) return list;

    return list.filter(shipment =>
      shipment.trackingId.toLowerCase().includes(term) ||
      shipment.customer.toLowerCase().includes(term) ||
      shipment.origin.toLowerCase().includes(term) ||
      shipment.destination.toLowerCase().includes(term)
    );
  });

  // --- Lógica de Navegación (La pieza clave) ---

  viewTracking(shipment: Shipment): void {
    // Cerramos el dropdown si está abierto antes de navegar
    this.closeDropdown();

    // Navegamos enviando el objeto en el state
    this.router.navigate(['/tracking'], {
      state: { shipmentData: shipment }
    });
  }

  // --- Lógica de UI existente ---

  updateSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchTerm.set(input.value);
  }

  toggleDropdown(id: string, event: MouseEvent) {
    event.stopPropagation();

    if (this.activeDropdownId() === id) {
      this.activeDropdownId.set(null);
    } else {
      const button = event.currentTarget as HTMLElement;
      const rect = button.getBoundingClientRect();
      // Ajuste para que el menú no se salga si está muy a la derecha
      const menuWidth = 176;

      this.dropdownPosition.set({
        x: rect.right - menuWidth,
        y: rect.bottom + 5
      });

      this.activeDropdownId.set(id);
    }
  }

  closeDropdown() {
    this.activeDropdownId.set(null);
  }
}
