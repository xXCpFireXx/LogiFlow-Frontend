import { Component, input, AfterViewInit, ElementRef, ViewChild, OnDestroy, PlatformRef, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Card } from '../card/card';
import * as L from 'leaflet';

@Component({
    selector: 'app-live-fleet',
    standalone: true,
    imports: [Card],
    templateUrl: './live-fleet.html',
    styleUrl: './live-fleet.css',
})
export class LiveFleet implements AfterViewInit, OnDestroy {
    private platformId = inject(PLATFORM_ID);

    truckBlue = input<{ x: number, y: number }>({ x: 30, y: 40 });
    truckOrange = input<{ x: number, y: number }>({ x: 60, y: 70 });

    @ViewChild('mapContainer') mapContainer!: ElementRef;
    private map?: L.Map;

    ngAfterViewInit() {
        if (isPlatformBrowser(this.platformId)) {
            this.initMap();
        }
    }

    private initMap() {
        // Coordinates approximate to match the mockup's mountain/lake look if using OSM
        // Or just a specific view. Let's use a nice mountain area or just a default city.
        // To match the "topographic" look, we can use a free topographic tile provider if preferred.
        // For now, standard OSM is the most reliable free one.
        this.map = L.map(this.mapContainer.nativeElement, {
            center: [39.06, -106.49], // Near Twin Lakes, Colorado (mountainous area)
            zoom: 12,
            zoomControl: false,
            attributionControl: false
        });

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
        }).addTo(this.map);

        // Custom Icons to match the mockup
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

        L.marker([39.08, -106.52], { icon: blueIcon }).addTo(this.map);
        L.marker([39.05, -106.45], { icon: orangeIcon }).addTo(this.map);

        // Asegurar que el mapa detecte el tamaño correcto del contenedor
        setTimeout(() => {
            this.map?.invalidateSize();
        }, 100);
    }

    ngOnDestroy() {
        if (this.map) {
            this.map.remove();
        }
    }
}
