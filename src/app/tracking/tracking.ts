import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Shipment, TruckPositions } from '../models/Shipment';

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
  history = [...TRACKING_HISTORY]; // Se reemplazará con shipment.history
  cargoDetails = [...CARGO_DETAILS]; // Se reemplazará con shipment.cargoDetails
  documents = [...TRACKING_DOCUMENTS]; // Se reemplazará con shipment.documents
  truckPositions: TruckPositions = TRUCK_POSITIONS; // Se reemplazará con shipment.truckPositions

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
    }
  }

  private updateViewWithShipmentData(shipment: Shipment): void {
    console.log('Rendering shipment:', shipment);

    // Actualizamos Header
    this.header = {
      title: 'Tracking',
      description: `Monitoring shipment ${shipment.trackingId}`,
    };

    // Actualizamos Estado
    this.shipmentStatus = shipment.status;

    // 3. Detalles Superiores (Cards)
    // Usamos shipment.details si existe, si no, construimos uno básico
    if (shipment.details && shipment.details.length > 0) {
      this.details = shipment.details;
    } else {
      this.details = [
        { type: 'origin', label: 'Origin', value: shipment.origin, subtext: 'Origin Location' },
        { type: 'destination', label: 'Destination', value: shipment.destination, subtext: 'Target Location' },
        { type: 'carrier', label: 'Carrier', value: 'LogiFlow Exp', subtext: 'Standard' },
        { type: 'weight', label: 'Weight', value: '---', subtext: 'Total Weight' },
      ];
    }

    // 4. Historial (Timeline)
    if (shipment.history && shipment.history.length > 0) {
      this.history = shipment.history;
    }

    // 5. Detalles de Carga (Tabla inferior izquierda)
    if (shipment.cargoDetails && shipment.cargoDetails.length > 0) {
      this.cargoDetails = shipment.cargoDetails;
    }

    // 6. Documentos (Lista inferior derecha)
    if (shipment.documents && shipment.documents.length > 0) {
      this.documents = shipment.documents;
    }

    // 7. Mapa (Posiciones)
    if (shipment.truckPositions) {
      this.truckPositions = shipment.truckPositions;
    }
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
