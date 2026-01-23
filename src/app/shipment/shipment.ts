import { Component } from '@angular/core';
import { HeaderMainContent } from '../shared/header-main-content/header-main-content';
import { ButtonGeneric } from '../shared/button-generic/button-generic';
import { StatusBadge } from '../shared/status-badge/status-badge';
import { SHIPMENT_HEADER, SHIPMENTS_MOCK } from './shipment.mock';
import { Card } from "../shared/card/card";
import { ShipmentTable } from "./shipment-table/shipment-table";

@Component({
  selector: 'app-shipment',
  imports: [HeaderMainContent,
    ButtonGeneric, ShipmentTable],
  templateUrl: './shipment.html',
  styleUrl: './shipment.css',
})
export class Shipment {

header = SHIPMENT_HEADER;
  shipments = SHIPMENTS_MOCK;
  onExport() {
    console.log('Exporting shipment data...');
  }

}
