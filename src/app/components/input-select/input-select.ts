import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-select',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-select.html',
})
export class InputSelect {
  @Input() label: string = '';
  @Input() value: string = '';
  @Input() options: string[] = [];
  @Input() helperText?: string;

  @Input() isOpen: boolean = false;

  // Le avisamos al padre cuando el usuario quiere abrir/cerrar
  @Output() toggle = new EventEmitter<void>();
  @Output() optionSelected = new EventEmitter<string>();

  toggleMenu() {
    this.toggle.emit();
  }

  selectOption(option: string) {
    this.value = option;
    this.optionSelected.emit(option);
  }
}
