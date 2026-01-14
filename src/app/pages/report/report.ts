import { Component } from '@angular/core';
import { HeaderMainContent } from '../../components/header-main-content/header-main-content';
import { TitleHeaderMain } from '../../models/TitleHeaderMain';
import { Card } from '../../components/card/card';
import { CardReport } from "../../components/card-report/card-report";

type CardReports = {
  titulo: string,
  valor: string,
  description: string,
  icon: string
}

@Component({
  selector: 'app-report',
  imports: [HeaderMainContent, Card, CardReport],
  templateUrl: './report.html',
  styleUrl: './report.css',
})
export class Report {

    header: TitleHeaderMain = {
      title: 'Operacional Report',
      description: 'Detailed insights into logistics operations',
    }

cards = <CardReports[]>([
    {
      titulo: 'Total Volume',
      valor: '1,240',
      description: '+12% vs last month',
      icon: 'shipment'
    },
    {
      titulo: 'In Transit',
      valor: '450',
      description: 'Active shipments',
      icon: 'transit'
    },
    {
      titulo: 'On-Time Rate',
      valor: '98.2%',
      description: 'Withing delivery window',
      icon: 'ontime'
    },

    {
      titulo: 'Exceptions',
      valor: '15',
      description: 'Requieres Attention',
      icon: 'exception'
    }

]);

}
