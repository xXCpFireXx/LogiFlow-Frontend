import { Component, ViewChild } from '@angular/core';
// import { SideBar } from '../../components/side-bar/side-bar';
import { TitleCasePipe, CommonModule } from '@angular/common';
import { Card as CardGeneric } from '../../components/card/card';
import { HeaderMainContent } from '../../components/header-main-content/header-main-content';
import { TitleHeaderMain } from '../../models/TitleHeaderMain';
import { ButtonGeneric } from '../../components/button-generic/button-generic';
import { StatusBadge } from '../../components/status-badge/status-badge';
import { LiveFleet } from '../../components/live-fleet/live-fleet';

type TrackingDetail = {
  type: 'origin' | 'destination' | 'carrier' | 'weight';
  label: string;
  value: string;
  subtext: string;
};

@Component({
  selector: 'app-tracking',
  standalone: true,
  imports: [
    CardGeneric,
    HeaderMainContent,
    TitleCasePipe,
    ButtonGeneric,
    StatusBadge,
    LiveFleet,
    CommonModule,
  ],
  templateUrl: './tracking.html',
  styleUrl: './tracking.css',
})
export class Tracking {
  @ViewChild('mapDashboard') mapDashboard!: LiveFleet;

  shipmentStatus = 'In Transit';

  truckPositions = {
    blue: { x: 45.7597, y: 4.8422 },
    orange: { x: 45.7238, y: 4.8931 },
  };

  header: TitleHeaderMain = {
    title: 'Tracking',
    description: 'Real-time delivery monitoring',
  };

  details: TrackingDetail[] = [
    {
      type: 'origin',
      label: 'Origin',
      value: 'Hamburg, DE',
      subtext: 'Warehouse H-22',
    },
    {
      type: 'destination',
      label: 'Destination',
      value: 'Lyon, FR',
      subtext: 'Distribution center L-01',
    },
    {
      type: 'carrier',
      label: 'Carrier',
      value: 'DHL Express',
      subtext: 'Service: Express worldwide',
    },
    {
      type: 'weight',
      label: 'Weight',
      value: '450 kg',
      subtext: '12 Pallets',
    },
  ];

  history = [
    {
      date: 'Oct 24, 2025',
      time: '14:30',
      status: 'Delivered',
      location: 'Lyon, FR',
      description: 'Package delivered',
      active: true,
      completed: true,
    },
    {
      date: 'Oct 23, 2025',
      time: '09:15',
      status: 'Out for Delivery',
      location: 'Lyon, FR',
      active: false,
      completed: true,
    },
    {
      date: 'Oct 22, 2025',
      time: '18:45',
      status: 'In Transit',
      location: 'Paris, FR',
      active: false,
      completed: true,
    },
    {
      date: 'Oct 21, 2025',
      time: '10:00',
      status: 'Processed',
      location: 'Hamburg, DE',
      active: false,
      completed: true, // Esta listo -> false -> PENDIENTE (se marca gris)
    },
  ];

  cargoDetails = [
    { label: 'Package Type', value: 'Standard Pallet (EUR)' },
    { label: 'Quantity', value: '12 Units' },
    { label: 'Dimensions', value: '120 x 80 x 144 cm' },
    { label: 'Total Volume', value: '1.38 CBM' },
    { label: 'Commodity', value: 'General Cargo' },
    { label: 'Stackable', value: 'No' },
    { label: 'HS Code', value: '8517.12.00' },
  ];

  documents = [
    { name: 'Bill of Lading (BOL)', format: 'PDF', size: '2.4 MB' },
    { name: 'Commercial Invoice', format: 'PDF', size: '1.1 MB' },
    { name: 'Packing List', format: 'PDF', size: '0.8 MB' },
  ];

  onExport() {
    console.log('Exporting tracking data...');
  }

  shareTracking() {
    console.log('Opening new tracking modal...');
  }

  get currentStep() {
    return this.history.find((step) => step.active) || this.history[0];
  }

  zoomIn() {
    const mapInstance = (this.mapDashboard as any)?.map;
    if (mapInstance) {
      mapInstance.zoomIn();
    }
  }

  zoomOut() {
    const mapInstance = (this.mapDashboard as any)?.map;
    if (mapInstance) {
      mapInstance.zoomOut();
    }
  }

  downloadDocument(doc: any) {
    console.log(`Iniciando descarga de: ${doc.name}`);
    // Lógica de descarga (ejemplo)
    alert(`Descargando ${doc.name}...`);
  }
}
