import { Component, input, AfterViewInit, ElementRef, ViewChild, OnDestroy, inject, PLATFORM_ID, effect } from '@angular/core';
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

  // 1. CAMBIO: Recibir el objeto completo como lo envía el padre
  truckPositions = input<any>();

  @ViewChild('mapContainer') mapContainer!: ElementRef;
  public map?: L.Map;
  private blueMarker?: L.Marker;
  private orangeMarker?: L.Marker;

  constructor() {
    effect(() => {
      const positions = this.truckPositions();
      if (this.map && positions) {
        this.updateMarkers(positions);
      }
    });
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initMap();
    }
  }

  private initMap() {
    // 2. CAMBIO: El centro inicial ahora es Medellín (o donde esté tu carga)
    this.map = L.map(this.mapContainer.nativeElement, {
      center: [6.2442, -75.5812], // Coordenadas de Medellín
      zoom: 13,
      zoomControl: false,
      attributionControl: false,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);

    // Intentar dibujar si ya hay datos
    if (this.truckPositions()) {
      this.updateMarkers(this.truckPositions());
    }

    setTimeout(() => this.map?.invalidateSize(), 200);
  }

  private updateMarkers(positions: any) {
    if (!this.map || !positions.blue || !positions.orange) return;

    // 3. CAMBIO: Usar latitude y longitude (lo que viene de MongoDB/Java)
    const blueCoords: [number, number] = [positions.blue.latitude, positions.blue.longitude];
    const orangeCoords: [number, number] = [positions.orange.latitude, positions.orange.longitude];

    // Validar que sean números válidos antes de poner el marcador
    if (isNaN(blueCoords[0]) || isNaN(blueCoords[1])) return;

    const blueIcon = L.divIcon({
      className: 'custom-div-icon',
      html: `<div class="bg-blue-500 p-2 rounded-full shadow-lg border-2 border-white text-white flex items-center justify-center" style="width: 40px; height: 40px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm12.5-11.5l2.25 3h-3.25V7h1zm-5.5 11.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>
            </div>`,
      iconSize: [40, 40],
      iconAnchor: [20, 20],
    });

    const orangeIcon = L.divIcon({
      className: 'custom-div-icon',
      html: `<div class="bg-orange-500 p-2 rounded-full shadow-lg border-2 border-white text-white flex items-center justify-center" style="width: 40px; height: 40px;">
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

    if (this.orangeMarker) {
      this.orangeMarker.setLatLng(orangeCoords);
    } else {
      this.orangeMarker = L.marker(orangeCoords, { icon: orangeIcon }).addTo(this.map);
    }

    // 4. EXTRA: Centrar el mapa automáticamente cuando el camión se mueve
    this.map.setView(blueCoords, this.map.getZoom());
  }

  ngOnDestroy() {
    if (this.map) this.map.remove();
  }
}
