import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card as CardGeneric } from '../../shared/card/card';

@Component({
  selector: 'app-cargo-details',
  standalone: true,
  imports: [CommonModule, CardGeneric],
  templateUrl: './cargo-details.html',
  styleUrl: './cargo-details.css',
})
export class CargoDetails {
  @Input() cargoData: any[] = [];
}
