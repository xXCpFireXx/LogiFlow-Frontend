import { Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-top-routes',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './top-routes.html'
})
export class TopRoutes {
  public chartOptions: any;

  constructor() {
    this.chartOptions = {
      series: [{
        name: "Usage",
        data: [85, 65, 45, 30, 20] // Los porcentajes de cada ruta
      }],
      chart: {
        type: 'bar',
        height: 300,
        toolbar: { show: false },
        animations: { enabled: true }
      },
      plotOptions: {
        bar: {
          horizontal: true,       
          barHeight: '30%',       
          borderRadius: 5,        

          colors: {
            backgroundBarColors: ['#F1F5F9'], 
            backgroundBarOpacity: 1,
            backgroundBarRadius: 5,
          }
        }
      },
      colors: ['#3b82f6'],
      dataLabels: {
        enabled: true,
        textAnchor: 'end',
        formatter: function (val: any) {
          return val + "%"; 
        },
        style: {
          fontSize: '12px',
          colors: ['#475569'] 
        },
        offsetX: 40 
      },
      xaxis: {
        categories: ['NY-LA', 'CHI-MIA', 'DAL-NY', 'LA-SEA', 'MIA-HOU'],
        labels: { show: false }, 
        axisBorder: { show: false },
        axisTicks: { show: false }
      },
      yaxis: {
        labels: {
          style: {
            fontWeight: 700,
            colors: '#475569' 
          }
        }
      },
      grid: { show: false }, 
      tooltip: { enabled: false }
    };
  }
}