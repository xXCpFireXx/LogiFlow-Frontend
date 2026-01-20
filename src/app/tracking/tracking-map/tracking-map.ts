import { Component, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveFleet } from '../../shared/live-fleet/live-fleet';

@Component({
  selector: 'app-tracking-map',
  imports: [CommonModule, LiveFleet],
  templateUrl: './tracking-map.html',
  styleUrl: './tracking-map.css',
})
export class TrackingMap {
  @Input() truckPositions: any;
  @Input() currentLocation: string = '';

  @ViewChild('mapDashboard') mapDashboard!: LiveFleet;

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
