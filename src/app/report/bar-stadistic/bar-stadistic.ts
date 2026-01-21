import { Component } from '@angular/core';
// Importamos el módulo y los tipos necesarios para que TypeScript no nos dé errores
import { 
  NgApexchartsModule, 
  ApexAxisChartSeries, 
  ApexChart, 
  ApexXAxis, 
  ApexPlotOptions, 
  ApexFill, 
  ApexLegend 
} from 'ng-apexcharts';

@Component({
  selector: 'app-bar-stadistic',
  imports: [NgApexchartsModule], 
  templateUrl: './bar-stadistic.html',
  styleUrl: './bar-stadistic.css',
})
export class BarStadistic {
 
  public chartOptions: any;

  constructor() {
    this.chartOptions = {
        // Configuracion de los datos que se esta mostrando
        series: [
        {
          name: 'Domestic',
          data: [30, 40, 25, 50]
        },
        {
          name: 'International',
          data: [20, 30, 45, 30]
        }
      ],
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        toolbar : {show: false}
      },
      colors: ['#1E88E5', '#BBDEFB'],

      plotOptions : {
        bar: {
          horizontal: false,
          columnWidth : '45%',
          borderRadius : 6,
          borderRadiusApplication : 'end',
        }
      },
      xaxis: {
        categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        axisBorder: {show : false},
        axisTicks: { show : false}
      },

      yaxis: { show: false },      
      grid: { show: false },       
      dataLabels: { enabled: false },

      legend: {
        position: 'bottom',        // La leyenda (Domestic/Int) va abajo
        markers: { radius: 12 }    // Puntos de la leyenda redondos
      }
    }
  }
}
