import { Component, Input } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { Card as CardGeneric } from '../../shared/card/card';
import { TrackingDetail } from '../tracking.mock';

@Component({
  selector: 'app-tracking-summary',
  standalone: true,
  imports: [CommonModule, TitleCasePipe, CardGeneric],
  templateUrl: './tracking-summary.html',
})
export class TrackingSummary {
  @Input() details: TrackingDetail[] = [];
}
