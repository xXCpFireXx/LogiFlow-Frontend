import { Component } from '@angular/core';
import { CardDashboard } from '../../components/card-dashboard/card-dashboard';

type Card = {
  titulo : string,
  valor : string,
  porcentaje : string
}

@Component({
  selector: 'app-dashboard',
  imports: [CardDashboard],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
 cards = <Card[]>([
    { titulo: 'Total Shipments', valor: '1,240', porcentaje: '5' },
    { titulo: 'Active Fleet', valor: '850', porcentaje: '12' },
    { titulo: 'Revenue', valor: '$45,200', porcentaje: '8' },
    { titulo: 'Pending Orders', valor: '32', porcentaje: '2' }
  ])

}
