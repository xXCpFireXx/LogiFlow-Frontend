import { Component } from '@angular/core';
import { CardDashboard } from '../../components/card-dashboard/card-dashboard';

@Component({
  selector: 'app-dashboard',
  imports: [CardDashboard],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

}
