import { Component, OnInit, OnDestroy, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Shipment, TruckPositions } from '../models/Shipment';
import { TrackingService } from './tracking.service';
import { Subscription } from 'rxjs';

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
export class Tracking implements OnInit, OnDestroy {
  private readonly location = inject(Location);
  private readonly trackingService = inject(TrackingService);
  private readonly cdr = inject(ChangeDetectorRef);
  private streamSub?: Subscription;

  isLoading = true;

  header = { ...TRACKING_HEADER };
  details: any[] = [
    { type: 'origin', label: 'Origin', value: 'Cargando...', subtext: '...' },
    { type: 'destination', label: 'Destination', value: 'Cargando...', subtext: '...' },
    { type: 'carrier', label: 'Carrier', value: 'Cargando...', subtext: '...' },
    { type: 'weight', label: 'Weight', value: 'Cargando...', subtext: '...' },
  ];
  history: any[] = [];
  cargoDetails: any[] = [];
  documents: any[] = [];
  truckPositions: any = null;

  shipmentStatus = 'In Transit';
  currentShipment: any = null;
  trackingId: string = '';
  currentLocation: string = 'Cargando...';

  ngOnInit(): void {
    // Recuperar el estado de la redirección
    const state = this.location.getState() as any;

    if (state?.shipmentData) {
      this.currentShipment = state.shipmentData;

      // se busca el id del mongo
      const sId = this.currentShipment?._id || this.currentShipment?.id;

      if (sId) {
        this.shipmentStatus = this.currentShipment.status;
        this.trackingId = this.currentShipment.trackingId || '---';

        // Con este ID ya podemos ir a la base de datos
        this.fetchRealData(sId);
      } else {
        console.error('No se encontró un ID en el envío seleccionado');
      }
    }
  }

  private fetchRealData(id: string) {
    // Historial
    this.trackingService.getHistory(id).subscribe((h) => {
      if (h && h.length > 0) {
        this.history = h;
        this.cdr.detectChanges();
      }
    });

    // Estado Actual
    this.trackingService.getCurrentStatus(id).subscribe((data) => {
      // console.log('Datos recibidos de la BD:', data);
      this.updateView(data);
    });

    // Tiempo real
    this.streamSub = this.trackingService.getRealTimeUpdates(id).subscribe((data) => {
      this.updateView(data);
    });
  }

  private updateView(data: any) {
    if (!data) return;

    // setTimeout(() => {
      this.currentShipment = data;
      this.trackingId = data.trackingId || this.trackingId;
      this.shipmentStatus = data.status || this.shipmentStatus;
      this.currentLocation = data.currentLocation || 'Sin ubicación';

      // Mapear Summary
      if (data.details) {
        this.details = [
          { type: 'origin', ...data.details.origin },
          { type: 'destination', ...data.details.destination },
          { type: 'carrier', ...data.details.carrier },
          { type: 'weight', ...data.details.weight },
        ];
      }

      // Buscamos la info de carga (primero cargo->bd y cargoDetails es el mock(angular))
      const cargoRaw = data.cargo || data.cargoDetails;

      if (cargoRaw) {
        // Si es un Array (lo que enviaba el Java viejo), lo usamos directo
        if (Array.isArray(cargoRaw)) {
          this.cargoDetails = cargoRaw;
        }
        // Si es un Objeto (lo que envía el Java nuevo), lo transformamos dinámicamente
        else {
          this.cargoDetails = Object.entries(cargoRaw as Record<string, any>)
            .filter(([key, value]) => {
              // No mostramos campos técnicos o nulos/vacíos
              return value !== null && value !== '' && key !== '_class';
            })
            .map(([key, value]) => ({
              label: key
                .replace(/([A-Z])/g, ' $1')
                .replace(/^./, (str) => str.toUpperCase())
                .trim(),
              value: String(value),
            }));
        }
      }

      // Documentos y camiones
      this.documents = data.documents || [];
      if (data.truckPositions) {
        this.truckPositions = data.truckPositions;
      }

      this.isLoading = false;
      this.cdr.detectChanges();
    // }, 0);
  }

  ngOnDestroy() {
    this.streamSub?.unsubscribe();
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
