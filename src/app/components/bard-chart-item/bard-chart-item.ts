import { Component, input } from '@angular/core';

@Component({
  selector: 'app-bard-chart-item',
  imports: [],
  templateUrl: './bard-chart-item.html',
  styleUrl: './bard-chart-item.css',
})
export class BardChartItem {
  region = input.required<string>();
  porcentaje = input.required<number>();
}
