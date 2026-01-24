import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Shipment } from '../models/Shipment';

// Componentes
import { HeaderMainContent } from '../shared/header-main-content/header-main-content';
import { ButtonGeneric } from '../shared/button-generic/button-generic';
import { StatusBadge } from '../shared/status-badge/status-badge';
import { TrackingSummary } from '../tracking/tracking-summary/tracking-summary';
import { ShipmentHistory } from '../tracking/shipment-history/shipment-history';
import { TrackingMap } from './tracking-map/tracking-map';
import { CargoDetails } from '../tracking/cargo-details/cargo-details';
import { TrackingDocuments } from '../tracking/tracking-documents/tracking-documents';

// Mocks
import {
  TRACKING_HEADER,
  TRACKING_DETAILS,
  TRACKING_HISTORY,
  CARGO_DETAILS,
  TRACKING_DOCUMENTS,
  TRUCK_POSITIONS,
} from './tracking.mock';

@Component({
  selector: 'app-tracking',
  standalone: true,
  imports: [
    CommonModule,
    HeaderMainContent,
    ButtonGeneric,
    StatusBadge,
    TrackingSummary,
    ShipmentHistory,
    TrackingMap,
    CargoDetails,
    TrackingDocuments,
  ],
  templateUrl: './tracking.html',
  styleUrl: './tracking.css',
})
export class Tracking implements OnInit {
  // 1. Inyección de dependencias moderna (sin constructor)
  private readonly location = inject(Location);

  // Variables de Estado (Mocks por defecto)
  header = { ...TRACKING_HEADER };
  details = [...TRACKING_DETAILS];
  history = [...TRACKING_HISTORY];
  cargoDetails = [...CARGO_DETAILS];
  documents = [...TRACKING_DOCUMENTS];
  truckPositions = TRUCK_POSITIONS;

  shipmentStatus = 'In Transit';
  currentShipment: Shipment | null = null;

  ngOnInit(): void {
    // 2. Recuperar el estado de forma segura usando Location
    // Esto funciona siempre, no importa el ciclo de vida del router
    const state = this.location.getState() as { shipmentData?: Shipment };

    if (state?.shipmentData) {
      this.currentShipment = state.shipmentData;
      this.updateViewWithShipmentData(this.currentShipment);
    } else {
      console.warn('No shipment data found in state. Using mocks.');
      // Aquí podrías disparar una petición HTTP si tienes un ID en la URL
    }
  }

  /**
   * Mapea el objeto Shipment (Backend) a la UI
   */
  private updateViewWithShipmentData(shipment: Shipment): void {
    console.log('Rendering shipment:', shipment);

    // Actualizamos Header
    this.header = {
      title: 'Tracking',
      description: `Monitoring shipment ${shipment.trackingId}`,
    };

    // Actualizamos Estado
    this.shipmentStatus = shipment.status;

    // Actualizamos las tarjetas de resumen
    this.details = [
      {
        type: 'origin',
        label: 'Origin',
        value: shipment.origin || 'N/A',
        subtext: 'Origin Location',
      },
      {
        type: 'destination',
        label: 'Destination',
        value: shipment.destination || 'N/A',
        subtext: 'Target Location',
      },
      {
        type: 'carrier',
        label: 'Carrier',
        value: (shipment as any).carrier || 'LogiFlow Express',
        subtext: 'Standard Service',
      },
      {
        type: 'weight',
        label: 'Weight',
        value: (shipment as any).weight ? `${(shipment as any).weight} kg` : '---',
        subtext: 'Total Weight',
      },
    ];
  }

  // --- Actions ---

  onExport(): void {
    console.log('Exporting...', this.currentShipment);
  }

  shareTracking(): void {
    console.log('Sharing...');
  }

  get currentStep() {
    return this.history.find((step) => step.active) || this.history[0];
  }

  downloadDocument(doc: any): void {
    alert(`Downloading: ${doc.name}`);
  }
}
