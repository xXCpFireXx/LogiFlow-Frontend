import {
  Component,
  input,
  AfterViewInit,
  ElementRef,
  ViewChild,
  OnDestroy,
  inject,
  PLATFORM_ID,
  effect,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as L from 'leaflet';

@Component({
  selector: 'app-live-fleet',
  standalone: true,
  imports: [],
  templateUrl: './live-fleet.html',
  styleUrl: './live-fleet.css',
})
export class LiveFleet implements AfterViewInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);

  truckBlue = input<any>();
  truckOrange = input<any>();

  @ViewChild('mapContainer') mapContainer!: ElementRef;
  public map?: L.Map;
  private blueMarker?: L.Marker;
  private orangeMarker?: L.Marker;

  constructor() {
    effect(() => {
      // Escuchamos ambos cambios
      const blue = this.truckBlue();
      const orange = this.truckOrange();

      if (this.map) {
        this.updateMarkers(blue, orange);
      }
    });
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initMap();
    }
  }

  private initMap() {
    this.map = L.map(this.mapContainer.nativeElement, {
      center: [6.2442, -75.5812],
      zoom: 13,
      zoomControl: false,
      attributionControl: false,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);

    // Intentar dibujar con datos iniciales
    this.updateMarkers(this.truckBlue(), this.truckOrange());

    setTimeout(() => this.map?.invalidateSize(), 200);
  }

  private updateMarkers(blue: any, orange: any) {
    if (!this.map) return;

    // --- Lógica para Camión Azul ---
    if (blue && blue.latitude && blue.longitude) {
      const blueCoords: [number, number] = [blue.latitude, blue.longitude];

      const blueIcon = L.divIcon({
        className: 'custom-div-icon',
        html: `<div class="bg-blue-500 p-2 rounded-full shadow-lg border-2 border-white text-white flex items-center justify-center" style="width: 40px; height: 40px;">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm12.5-11.5l2.25 3h-3.25V7h1zm-5.5 11.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>
              </div>`,
        iconSize: [40, 40],
        iconAnchor: [20, 20],
      });

      if (this.blueMarker) {
        this.blueMarker.setLatLng(blueCoords);
      } else {
        this.blueMarker = L.marker(blueCoords, { icon: blueIcon }).addTo(this.map);
      }

      // Auto-centrar en el camión azul
      this.map.setView(blueCoords, this.map.getZoom());
    }

    // --- Lógica para Camión Naranja ---
    if (orange && orange.latitude && orange.longitude) {
      const orangeCoords: [number, number] = [orange.latitude, orange.longitude];

      const orangeIcon = L.divIcon({
        className: 'custom-div-icon',
        html: `<div class="bg-orange-500 p-2 rounded-full shadow-lg border-2 border-white text-white flex items-center justify-center" style="width: 40px; height: 40px;">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm12.5-11.5l2.25 3h-3.25V7h1zm-5.5 11.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>
              </div>`,
        iconSize: [40, 40],
        iconAnchor: [20, 20],
      });

      if (this.orangeMarker) {
        this.orangeMarker.setLatLng(orangeCoords);
      } else {
        this.orangeMarker = L.marker(orangeCoords, { icon: orangeIcon }).addTo(this.map);
      }
    }
  }

  ngOnDestroy() {
    if (this.map) this.map.remove();
  }
}
