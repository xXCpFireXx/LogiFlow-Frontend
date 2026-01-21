import { Component, input } from '@angular/core';


@Component({
  selector: 'app-header-main-content',
  standalone: true,
  imports: [],
  templateUrl: './header-main-content.html',
  styleUrl: './header-main-content.css',
})
export class HeaderMainContent {
  title = input<string>();
  description = input<string>();
}
