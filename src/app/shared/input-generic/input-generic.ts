import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-generic',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input-generic.html',
})
export class InputGeneric {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() type: 'text' | 'password' | 'email' | 'number' = 'text';
  @Input() iconPath: string = ''; // Recibe el diseño del icono SVG
  @Input() disabled: boolean = false;

  // Para el enlace de datos (Two-way binding)
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();

  onModelChange(newValue: string) {
    this.valueChange.emit(newValue);
  }
}
