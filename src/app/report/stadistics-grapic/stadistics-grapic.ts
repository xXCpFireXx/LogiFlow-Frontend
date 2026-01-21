import { Component } from '@angular/core';
import {
  NgApexchartsModule,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexStroke,
  ApexFill,
  ApexYAxis,
  ApexGrid,
  ApexDataLabels,
  ApexPlotOptions,
  ApexLegend,
  ApexTooltip
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  fill: ApexFill;
  grid: ApexGrid;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  colors: string[];
  legend: ApexLegend;
  tooltip: ApexTooltip;
};


@Component({
  selector: 'app-stadistics-grapic',
  imports: [NgApexchartsModule],
  templateUrl: './stadistics-grapic.html',
  styleUrl: './stadistics-grapic.css',
})
export class StadisticsGrapic {

  public performanceChartOptions: Partial<ChartOptions>;

  constructor() {
    this.performanceChartOptions = {

      series: [
        {
          name: 'Transit Time',
          data: [12, 25, 18, 32, 21] // Sincronizado con las 5 categorías
        }
      ],

      // Define que tipo de grafica es y su tamaño
      // Ejemplo de grafica type 'line' Grafica de line ; type 'bar' Grafica de barra y grafica de area que es la que vamos a utilizar
      chart: {
        type: 'area',
        height: 350,
        toolbar: {
          show: false // esto nos oculta el menu de descarga, para que se vea limpio
        },
        zoom: {
          enabled: false // evita que el usuario haga zoom por error
        }
      },

      // Linea
      stroke: {
        curve: 'smooth', // smooth es para crear ondas
        width: 3, // grosor de la linea
        colors: ['#1E88E5']
      },

      // Degradado de la grafica
      fill: {
        type: 'gradient', // degradado no color solido
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.5, // opacidad arriba
          opacityTo: 0, //opacidad abajo
          stops: [0, 90, 100] // Donde empieza y termina el desvanecimiento
        }
      },
      // Este es eje X
      xaxis: {
        categories: ['May 01', 'May 08', 'May 15', 'May 22', 'May 30'],
        axisBorder: { show: false }, // Quia la linea gris
        axisTicks: { show: false }, // Quita las pequeñas rayitas de cada categoria
        labels: {
          style: {
            colors: '#64748b',
            fontSize: '12px'
          },
          offsetY: 5
        }
      },

      // Estadisticas minimalistas

      yaxis: {
        show: false
      },
      grid: {
        show: false, // Quita las linas horizontales
        padding: {
          left: 20,
          right: 20
        }
      }
    }
  }
}
