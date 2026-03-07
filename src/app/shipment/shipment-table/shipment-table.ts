import { Component, computed, inject, input, output, signal } from '@angular/core';
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

// --- Entradas (Inputs) de datos y paginación ---
  shipments = input.required<Shipment[]>();

  // Nuevos inputs para la paginación (con valores por defecto por si acaso)
  currentPage = input<number>(0);
  totalItems = input<number>(0);
  totalPages = input<number>(0);

  // --- Salidas (Outputs) ---
  // Evento que emitirá el número de la nueva página solicitada
  pageChange = output<number>();

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
      shipment.destination.toLowerCase().includes(term) ||
      shipment.status.replace(/_/g, ' ').toLowerCase().includes(term)
    );
  });

  // --- Lógica de Paginación ---

  goToPreviousPage(event: Event) {
    event.preventDefault(); // Evita que el enlace recargue la página
    if (this.currentPage() > 0) {
      this.pageChange.emit(this.currentPage() - 1);
    }
  }

  goToNextPage(event: Event) {
    event.preventDefault();
    if (this.currentPage() < this.totalPages() - 1) {
      this.pageChange.emit(this.currentPage() + 1);
    }
  }

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
