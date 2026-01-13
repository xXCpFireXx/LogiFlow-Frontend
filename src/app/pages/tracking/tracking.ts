import { Component } from '@angular/core';
// import { SideBar } from '../../components/side-bar/side-bar';
import { TitleCasePipe } from '@angular/common';
import { Card as CardGeneric } from '../../components/card/card';
import { HeaderMainContent } from '../../components/header-main-content/header-main-content';
import { TitleHeaderMain } from '../../models/TitleHeaderMain';

type TrackingDetail = {
  type: 'origin' | 'destination' | 'carrier' | 'weight';
  label: string;
  value: string;
  subtext: string;
};

@Component({
  selector: 'app-tracking',
  standalone: true,
  imports: [CardGeneric, HeaderMainContent, TitleCasePipe],
  templateUrl: './tracking.html',
  styleUrl: './tracking.css',
})
export class Tracking {
  header: TitleHeaderMain = {
    title: 'Tracking',
    description: 'Detailed information for tracking ID: #TRK-882910',
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
}
