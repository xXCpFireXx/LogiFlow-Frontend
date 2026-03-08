import { Component, Input, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';
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
  @Input() disabled: boolean = false;
  @Input() isOpen: boolean = false;

  // Le avisamos al padre cuando el usuario quiere abrir/cerrar
  @Output() toggle = new EventEmitter<void>();
  @Output() optionSelected = new EventEmitter<string>();

  // Inyectamos el ElementRef para tener acceso al "cuerpo" de este componente
  constructor(private _elementRef: ElementRef) {}

  // Este decorador escucha todos los clics que ocurren en pantalla
  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    if (this.isOpen && !this._elementRef.nativeElement.contains(event.target)) {
      this.toggle.emit();
    }
  }

  toggleMenu() {
    this.toggle.emit();
  }

  selectOption(option: string) {
    this.value = option;
    this.optionSelected.emit(option);
  }
}
