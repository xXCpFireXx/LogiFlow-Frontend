import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './side-bar.html',
  styleUrl: './side-bar.css',
})
export class SideBar {
  @Input() isOpen: boolean = false; // Recibe el estado del padre
  @Output() closeSideBar = new EventEmitter<void>(); // Avisa al padre para cerrar

  onNavigate() {
    this.closeSideBar.emit();
  }
}
