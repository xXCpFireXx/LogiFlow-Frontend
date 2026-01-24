import { Component, inject, signal } from '@angular/core';
import { Card } from '../shared/card/card';
import { HeaderMainContent } from '../shared/header-main-content/header-main-content';
import { CardReport } from './card-report/card-report';
import { TitleHeaderMain } from '../models/TitleHeaderMain';
import { region } from '../models/Region';
import { StadisticsGrapic } from "./stadistics-grapic/stadistics-grapic";
import { BarStadistic } from "./bar-stadistic/bar-stadistic";
import { TopRoutes } from "./top-routes/top-routes";
import { RecentAlerts } from "./recent-alerts/recent-alerts";
import { ButtonGeneric } from "../shared/button-generic/button-generic";
import { ReportService } from './report.service';
import { Router } from '@angular/router';
import { RegionData, ReportCard, ReportData } from './report.model';

type CardReports = {
  titulo: string,
  valor: string,
  description: string,
  icon: string
}

@Component({
  selector: 'app-report',
  imports: [HeaderMainContent, Card, CardReport, StadisticsGrapic, BarStadistic, TopRoutes, RecentAlerts, ButtonGeneric],
  templateUrl: './report.html',
  styleUrl: './report.css',
})
export class Report {
  private reportService = inject(ReportService);
  private router = inject(Router);

  header = signal<TitleHeaderMain>({
    title: '',
    description: '',
  })

  regionData = signal<RegionData[]>([]);

  cards = signal<ReportCard[]>([]);


  ngOnInit(): void {
    this.reportService.getReportData().subscribe({
      next: (data: ReportData) => {
        console.log('Dashboard data received:', data);
        this.header.set(data.header);
        this.cards.set(data.cards);
        this.regionData.set(data.regionData);
      },
      error: (err: any) => {
        console.error('API Error:', err);
        // Usamos /500 porque es un fallo de data/servidor
        this.router.navigate(['/500']);
      },
    });
  }

}
