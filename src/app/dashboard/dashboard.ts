import { Component, inject, OnInit, signal } from '@angular/core';
import { CardDashboard } from './card-dashboard/card-dashboard';
import { Card as CardGeneric } from '../shared/card/card';
import { HeaderMainContent } from '../shared/header-main-content/header-main-content';
import { region } from '../models/Region';
import { BardChartItem } from './bard-chart-item/bard-chart-item';
import { LiveFleet } from '../shared/live-fleet/live-fleet';
import { DashboardService } from './dashboard.service';
import { DashboardCard, TruckPositions, HeaderData, DashboardData } from './dashboard.model';
import { Router } from '@angular/router';
import { ShipmentService } from '../shipment/shipment.service';
import { ShipmentTable } from '../shipment/shipment-table/shipment-table';
import { toSignal } from '@angular/core/rxjs-interop';


@Component({
  selector: 'app-dashboard',
  imports: [CardDashboard, CardGeneric, HeaderMainContent, BardChartItem, LiveFleet, ShipmentTable],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  private dashboardService = inject(DashboardService);
  private shipmentService = inject(ShipmentService);
  private router = inject(Router);

  readonly shipments = toSignal(
    this.shipmentService.getAll(),
    { initialValue: [] }
  );

  truckPositions = signal<TruckPositions>({
    blue: { x: 0, y: 0 },
    orange: { x: 0, y: 0 },
  });

  regionData = signal<region[]>([]);

  header = signal<HeaderData>({
    title: '',
    description: '',
  });


  cards = signal<DashboardCard[]>([]);

  ngOnInit(): void {
    this.dashboardService.getDashboardData().subscribe({
      next: (data: DashboardData) => {
        console.log('Dashboard data received:', data);
        this.header.set(data.header);
        this.cards.set(data.cards);
        this.regionData.set(data.regionData);
        this.truckPositions.set(data.truckPositions);
      },
      error: (err) => {
        console.error('API Error:', err);
        // Usamos /500 porque es un fallo de data/servidor
        this.router.navigate(['/500']);
      },
    });
  }
}
