import { Component, signal } from '@angular/core';
import { HeaderMainContent } from '../shared/header-main-content/header-main-content';
import { ButtonGeneric } from '../shared/button-generic/button-generic';
import { SHIPMENT_HEADER, SHIPMENTS_MOCK } from './shipment.mock';
import { ShipmentTable } from './shipment-table/shipment-table';
import { Shipment as ShipmentModel } from '../models/Shipment';

@Component({
  selector: 'app-shipment',
  imports: [HeaderMainContent, ButtonGeneric, ShipmentTable],
  templateUrl: './shipment.html',
  styleUrl: './shipment.css',
})
export class Shipment {
  // 2. Convertimos las propiedades a Signals
  // Usamos 'readonly' porque la referencia a la señal no cambia, solo su valor.
  readonly header = signal(SHIPMENT_HEADER);

  // Tipamos explícitamente el array de shipments
  readonly shipments = signal<ShipmentModel[]>(SHIPMENTS_MOCK);

  onExport() {
    console.log('Exporting shipment data...');
  }
}
