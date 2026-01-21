import { Component, computed, input } from '@angular/core';
import {
  NgApexchartsModule,
  ApexChart,
  ApexAxisChartSeries,
  ApexXAxis,
  ApexPlotOptions,
  ApexYAxis,
  ApexGrid,
  ApexLegend,
  ApexStroke,
  ApexFill,
  ApexDataLabels,
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
  selector: 'app-bard-chart-item',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './bard-chart-item.html',
  styleUrl: './bard-chart-item.css',
  host: {
    class: 'block w-full h-full'
  }
})
export class BardChartItem {
  regions = input<any>();

  public options: ChartOptions;

  constructor() {
    this.options = {
      series: [
        {
          name: 'Volume',
          data: [65, 85, 45, 60],
        },
      ],
      chart: {
        type: 'bar',
        height: 350,
        stacked: false,
        toolbar: { show: false },
        sparkline: { enabled: false },
      },
      colors: ['#137fec'],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '50%',
          borderRadius: 0,
          colors: {
            backgroundBarColors: ['#dbeafe'],
            backgroundBarOpacity: 1,
            backgroundBarRadius: 0,
          }
        },
      },
      dataLabels: { enabled: false },
      xaxis: {
        categories: ['North', 'South', 'East', 'West'],
        axisBorder: { show: false },
        axisTicks: { show: false },
        labels: {
          style: {
            colors: '#94a3b8',
            fontSize: '12px',
            fontWeight: 500,
          },
        },
      },
      yaxis: {
        show: false,
        max: 100
      },
      grid: {
        show: false,
        padding: { left: 10, right: 10, top: 0, bottom: 0 }
      },
      stroke: {
        show: true,
        width: 0,
        colors: ['transparent'],
      },
      fill: { opacity: 1 },
      legend: { show: false },
      tooltip: {
        enabled: true,
        shared: false,
        y: {
          formatter: (val) => val.toString()
        }
      },
    };
  }
}