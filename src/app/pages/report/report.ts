import { Component } from '@angular/core';
import { HeaderMainContent } from '../../components/header-main-content/header-main-content';
import { TitleHeaderMain } from '../../models/TitleHeaderMain';
import { Card } from '../../components/card/card';
import { CardReport } from "../../components/card-report/card-report";

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



}
