import { Component, ViewChild } from '@angular/core';
import { NgApexchartsModule, ChartComponent, ApexAxisChartSeries, ApexChart, ApexXAxis, ApexDataLabels, ApexYAxis, ApexLegend, ApexFill, ApexStroke, ApexTooltip, ApexGrid } from 'ng-apexcharts';

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    yaxis: ApexYAxis;
    dataLabels: ApexDataLabels;
    grid: ApexGrid;
    fill: ApexFill;
    stroke: ApexStroke;
    legend: ApexLegend;
    tooltip: ApexTooltip;
    colors: string[];
};

@Component({
    selector: 'app-report-charts',
    standalone: true,
    imports: [NgApexchartsModule],
    templateUrl: './report-charts.html',
    styleUrl: './report-charts.css',
})
export class ReportCharts {
    // Referencias a los componentes de gráficos para posible manipulación directa
    @ViewChild('shipmentChart') shipmentChart!: ChartComponent;
    @ViewChild('performanceChart') performanceChart!: ChartComponent;

    // Opciones de configuración para los gráficos
    public volumeChartOptions: Partial<ChartOptions>;
    public performanceChartOptions: Partial<ChartOptions>;

    constructor() {
        // Configuración del gráfico de Volumen de Envíos Semanales (Barras Apiladas)
        this.volumeChartOptions = {
            series: [
                {
                    name: 'Domestic',
                    data: [44, 55, 41, 67]
                },
                {
                    name: 'International',
                    data: [13, 23, 20, 38]
                }
            ],
            chart: {
                type: 'bar',
                height: 350,
                stacked: true, // Habilitar barras apiladas
                toolbar: {
                    show: false // Ocultar barra de herramientas para un look más limpio
                },
                zoom: {
                    enabled: false
                }
            },
            colors: ['#1E88E5', '#BBDEFB'], // Colores personalizados: Azul fuerte y Azul claro
            xaxis: {
                categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                }
            },
            yaxis: {
                show: false // Ocultar eje Y para un diseño más minimalista
            },
            grid: {
                show: false // Ocultar cuadrícula
            },
            fill: {
                opacity: 1
            },
            dataLabels: {
                enabled: false // Ocultar etiquetas de datos sobre las barras
            },
            legend: {
                position: 'bottom',
                offsetY: 8
            }
        };

        // Configuración del gráfico de Rendimiento de Entrega (Línea Suave / Area)
        this.performanceChartOptions = {
            series: [
                {
                    name: 'Avg Transit Time',
                    data: [31, 40, 28, 51, 42, 109, 100]
                }
            ],
            chart: {
                height: 350,
                type: 'area',
                toolbar: {
                    show: false
                }
            },
            colors: ['#1E88E5'], // Color de la línea
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth', // Curva suave para un diseño premium
                width: 3
            },
            xaxis: {
                type: 'category',
                categories: [
                    'May 01',
                    'May 08',
                    'May 15',
                    'May 22',
                    'May 30'
                ],
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                }
            },
            yaxis: {
                show: false
            },
            grid: {
                show: false
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy'
                }
            },
            fill: {
                type: 'gradient', // Relleno con gradiente
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.45,
                    opacityTo: 0.05,
                    stops: [20, 100, 100, 100]
                }
            }
        };
    }
}
