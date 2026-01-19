import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button-generic',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-generic.html',
})
export class ButtonGeneric {
  label = input.required<string>();
  variant = input<'primary' | 'secondary'>('secondary');
  btnClick = output<void>();
}
