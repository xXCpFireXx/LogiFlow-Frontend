import { Component, inject, signal } from '@angular/core';
import { HeaderMainContent } from '../shared/header-main-content/header-main-content';
import { ButtonGeneric } from '../shared/button-generic/button-generic';
import { SHIPMENT_HEADER } from './shipment.mock';
import { ShipmentTable } from './shipment-table/shipment-table';
import { ShipmentService } from './shipment.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-shipment',
  imports: [HeaderMainContent, ButtonGeneric, ShipmentTable],
  templateUrl: './shipment.html',
  styleUrl: './shipment.css',
})
export class Shipment {

  private shipmentService = inject(ShipmentService);
  readonly header = signal(SHIPMENT_HEADER);

  readonly shipments = toSignal(
    this.shipmentService.getAll(),
    { initialValue: [] }
  );

  onExport() {
    console.log('Exporting shipment data...');
  }
}
