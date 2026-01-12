import { Component } from '@angular/core';
import { CardDashboard } from '../../components/card-dashboard/card-dashboard';

type Card = {
  titulo : string,
  valor : string,
  porcentaje : string,
  icon: string,
  isNegative?: boolean
}

@Component({
  selector: 'app-dashboard',
  imports: [CardDashboard],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  cards = <Card[]>([
    { 
      titulo: 'Total Active Shipments', 
      valor: '1,240', 
      porcentaje: '5', 
      icon: 'shipment' 
    },
    { 
      titulo: 'In Transit', 
      valor: '850', 
      porcentaje: '12', 
      icon: 'transit' 
    },
    { 
      titulo: 'Exceptions', 
      valor: '12', 
      porcentaje: '2', 
      icon: 'exception', 
      isNegative: true 
    },
    { 
      titulo: 'Revenue MTD', 
      valor: '$450k', 
      porcentaje: '8', 
      icon: 'revenue' 
    }
  ])
}
