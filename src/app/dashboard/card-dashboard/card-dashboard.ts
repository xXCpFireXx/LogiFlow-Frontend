import { Component, input } from '@angular/core';

@Component({
    selector: 'app-card-dashboard',
    standalone: true,
    imports: [],
    templateUrl: './card-dashboard.html',
    styleUrl: './card-dashboard.css',
})
export class CardDashboard {
    id = input<string>();
    title = input<string>();
    value = input<string>();
    percentage = input<string>();
    icon = input<string>();
    isNegative = input<boolean>(false);
}
