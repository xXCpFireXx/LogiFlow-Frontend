import { Component, inject, OnInit, signal } from '@angular/core';
import { CardDashboard } from './card-dashboard/card-dashboard';
import { Card as CardGeneric } from '../shared/card/card';
import { HeaderMainContent } from '../shared/header-main-content/header-main-content';
import { region } from '../models/Region';
import { BardChartItem } from './bard-chart-item/bard-chart-item';
import { LiveFleet } from '../shared/live-fleet/live-fleet';
import { DashboardService } from './dashboard.service';
import { DashboardCard, TruckPositions, HeaderData, DashboardData } from './dashboard.model';

@Component({
  selector: 'app-dashboard',
  imports: [CardDashboard, CardGeneric, HeaderMainContent, BardChartItem, LiveFleet],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  private dashboardService = inject(DashboardService);

  truckPositions = signal<TruckPositions>({
    blue: { x: 0, y: 0 },
    orange: { x: 0, y: 0 }
  });

  regionData = signal<region[]>([]);

  header = signal<HeaderData>({
    title: '',
    description: ''
  });

  cards = signal<DashboardCard[]>([]);

  ngOnInit(): void {
    this.dashboardService.getDashboardData().subscribe((data: DashboardData) => {
      console.log('Dashboard data received:', data);
      this.header.set(data.header);
      this.cards.set(data.cards);
      this.regionData.set(data.regionData);
      this.truckPositions.set(data.truckPositions);
    });
  }
}
