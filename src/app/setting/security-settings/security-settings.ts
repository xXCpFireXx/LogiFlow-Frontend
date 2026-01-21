import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputSelect } from '../input-select/input-select'; // Ajusta la ruta según tu carpeta

@Component({
  selector: 'app-security-settings',
  standalone: true,
  imports: [CommonModule, InputSelect],
  templateUrl: './security-settings.html',
})
export class SecuritySettings {
  @Input() securityConfig: any;
  @Input() userProfile: any;
  @Input() activeDropdown: string = '';

  @Output() toggle = new EventEmitter<string>();
  @Output() selection = new EventEmitter<{ option: string; key: string }>();
}
