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

    truckBlue = input<{ x: number, y: number }>({ x: 30, y: 40 });
    truckOrange = input<{ x: number, y: number }>({ x: 60, y: 70 });

    @ViewChild('mapContainer') mapContainer!: ElementRef;
    public map?: L.Map;
    private blueMarker?: L.Marker;
    private orangeMarker?: L.Marker;

    constructor() {
        effect(() => {
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
            center: [39.06, -106.49],
            zoom: 12,
            zoomControl: false,
            attributionControl: false
        });

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
        }).addTo(this.map);

        this.updateMarkers(this.truckBlue(), this.truckOrange());

        setTimeout(() => {
            this.map?.invalidateSize();
        }, 100);
    }

    private updateMarkers(blue: { x: number, y: number }, orange: { x: number, y: number }) {
        if (!this.map) return;

        const blueIcon = L.divIcon({
            className: 'custom-div-icon',
            html: `<div class="bg-blue-500 p-2 rounded-full shadow-lg border-2 border-white text-white flex items-center justify-center" style="width: 40px; height: 40px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm12.5-11.5l2.25 3h-3.25V7h1zm-5.5 11.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>
            </div>`,
            iconSize: [40, 40],
            iconAnchor: [20, 20]
        });

        const orangeIcon = L.divIcon({
            className: 'custom-div-icon',
            html: `<div class="bg-orange-500 p-2 rounded-full shadow-lg border-2 border-white text-white flex items-center justify-center" style="width: 40px; height: 40px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm12.5-11.5l2.25 3h-3.25V7h1zm-5.5 11.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>
            </div>`,
            iconSize: [40, 40],
            iconAnchor: [20, 20]
        });

        if (this.blueMarker) {
            this.blueMarker.setLatLng([blue.x, blue.y]);
        } else if (blue.x !== 0 || blue.y !== 0) {
            this.blueMarker = L.marker([blue.x, blue.y], { icon: blueIcon }).addTo(this.map);
        }

        if (this.orangeMarker) {
            this.orangeMarker.setLatLng([orange.x, orange.y]);
        } else if (orange.x !== 0 || orange.y !== 0) {
            this.orangeMarker = L.marker([orange.x, orange.y], { icon: orangeIcon }).addTo(this.map);
        }
    }

    ngOnDestroy() {
        if (this.map) {
            this.map.remove();
        }
    }
}
