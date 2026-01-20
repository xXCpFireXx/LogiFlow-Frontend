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
  // Definimos la variable que guardará toda la configuración
  public chartOptions: any;

  constructor() {
    this.chartOptions = {
      // 1. LOS DATOS (SERIES): Un arreglo con dos objetos (Domestic e International)
      series: [
        {
          name: 'Domestic',
          data: [30, 40, 25, 50] // Valores de la barra inferior
        },
        {
          name: 'International',
          data: [20, 30, 15, 60] // Valores de la barra superior
        }
      ],

      // 2. TIPO DE GRÁFICA
      chart: {
        type: 'bar',      // Queremos barras
        height: 350,      // Altura en píxeles
        stacked: true,    // ¡CLAVE! Esto apila una serie sobre la otra
        toolbar: { show: false } // Escondemos el menú para que sea limpio
      },

      // 3. COLORES (Paleta azul de tu imagen)
      colors: ['#1E88E5', '#BBDEFB'], 

      // 4. ESTILO DE LAS BARRAS
      plotOptions: {
        bar: {
          horizontal: false,   // Barras verticales
          columnWidth: '45%',  // Grosor de la columna
          borderRadius: 6,     // Bordes redondeados modernos
          borderRadiusApplication: 'end' // Solo redondea la parte superior
        }
      },

      // 5. EJE X (Categorías abajo)
      xaxis: {
        categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        axisBorder: { show: false }, // Quitamos la línea gris del suelo
        axisTicks: { show: false }   // Quitamos las marquitas de los nombres
      },

      // 6. DETALLES FINALES
      yaxis: { show: false },      // Ocultamos los números de la izquierda
      grid: { show: false },       // Quitamos las líneas de fondo
      dataLabels: { enabled: false }, // No queremos números escritos sobre las barras
      
      legend: {
        position: 'bottom',        // La leyenda (Domestic/Int) va abajo
        markers: { radius: 12 }    // Puntos de la leyenda redondos
      }
    };
  }
}