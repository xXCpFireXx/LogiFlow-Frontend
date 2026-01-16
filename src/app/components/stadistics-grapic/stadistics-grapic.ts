import { Component } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexStroke, ApexFill, ApexYAxis, ApexGrid, NgApexchartsModule } from 'ng-apexcharts';

// Descargar la libreria Apexcharts

// Definicion de opciones de grafico

export type ChartOptions = {
  series: ApexAxisChartSeries; // coordenadas
  chart: ApexChart; // Configuración básica (altura, tipo, botones)
  xaxis: ApexXAxis; // el eje horizontal
  stroke: ApexStroke; // El estilo de la linea
  fill: ApexFill; // El relleno (color o degradado)
  yaxis: ApexYAxis; // El eje vertical
  grid: ApexGrid; // Lineas de fondo

}


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
          data: [10, 25, 18, 32, 21, 45, 30]
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
          enabled: true // evita que el usuario haga zoom por error
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
      },

      // Estadisticas minimalistas

      yaxis: {
        show: false
      },
      grid: {
        show: false // Quita las linas horizontales
      }
    }
  }
}
