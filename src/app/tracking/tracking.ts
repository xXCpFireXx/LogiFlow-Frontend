import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderMainContent } from '../shared/header-main-content/header-main-content';
import { ButtonGeneric } from '../shared/button-generic/button-generic';
import { StatusBadge } from '../shared/status-badge/status-badge';
import { TrackingSummary } from '../tracking/tracking-summary/tracking-summary';
import { ShipmentHistory } from '../tracking/shipment-history/shipment-history';
import { TrackingMap } from './tracking-map/tracking-map';
import { CargoDetails } from '../tracking/cargo-details/cargo-details';
import { TrackingDocuments } from '../tracking/tracking-documents/tracking-documents';

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
    HeaderMainContent,
    ButtonGeneric,
    StatusBadge,
    CommonModule,
    TrackingSummary,
    ShipmentHistory,
    TrackingMap,
    CargoDetails,
    TrackingDocuments,
  ],
  templateUrl: './tracking.html',
  styleUrl: './tracking.css',
})
export class Tracking {
  header = TRACKING_HEADER;
  details = TRACKING_DETAILS;
  history = TRACKING_HISTORY;
  cargoDetails = CARGO_DETAILS;
  documents = TRACKING_DOCUMENTS;
  truckPositions = TRUCK_POSITIONS;

  shipmentStatus = 'In Transit';

  onExport() {
    console.log('Exporting tracking data...');
  }

  shareTracking() {
    console.log('Opening new tracking modal...');
  }

  get currentStep() {
    return this.history.find((step) => step.active) || this.history[0];
  }

  downloadDocument(doc: any) {
    alert(`Downloading file: ${doc.name}`);
  }
}
