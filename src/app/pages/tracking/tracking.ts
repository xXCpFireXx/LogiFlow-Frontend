import { Component, ViewChild } from '@angular/core';
// import { SideBar } from '../../components/side-bar/side-bar';
import { TitleCasePipe, CommonModule } from '@angular/common';
import { Card as CardGeneric } from '../../components/card/card';
import { HeaderMainContent } from '../../components/header-main-content/header-main-content';
import { TitleHeaderMain } from '../../models/TitleHeaderMain';
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
  imports: [CardGeneric, HeaderMainContent, TitleCasePipe, StatusBadge, LiveFleet, CommonModule],
  templateUrl: './tracking.html',
  styleUrl: './tracking.css',
})
export class Tracking {
  @ViewChild('mapDashboard') mapDashboard!: LiveFleet;

  shipmentStatus = 'In Transit';

  truckPositions = { blue: { x: 39.08, y: -106.52 }, orange: { x: 39.05, y: -106.45 } };

  history = [
    {
      date: 'Oct 24, 2025',
      time: '14:30',
      status: 'Delivered',
      location: 'Lyon, FR',
      description: 'Package delivered to recipient',
      active: false,
    },
    {
      date: 'Oct 23, 2025',
      time: '09:15',
      status: 'Out for Delivery',
      location: 'Lyon, FR',
      description: 'Package is with the local courier',
      active: true,
    },
    {
      date: 'Oct 22, 2025',
      time: '18:45',
      status: 'In Transit',
      location: 'Paris, FR',
      description: 'Arrived at sorting center',
      active: false,
    },
    {
      date: 'Oct 21, 2025',
      time: '10:00',
      status: 'Processed',
      location: 'Hamburg, DE',
      description: 'Shipment picked up by carrier',
      active: false,
    },
  ];

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

  onExport() {
    console.log('Exporting tracking data...');
  }

  shareTracking() {
    console.log('Opening new tracking modal...');
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
}
