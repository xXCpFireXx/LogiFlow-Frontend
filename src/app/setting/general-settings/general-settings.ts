import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputSelect } from '../input-select/input-select';
import { ToggleSwitch } from '../toggle-switch/toggle-switch';

@Component({
  selector: 'app-general-settings',
  standalone: true,
  imports: [CommonModule, InputSelect, ToggleSwitch],
  templateUrl: './general-settings.html',
})
export class GeneralSettings {
  @Input() dropdowns: any[] = [];
  @Input() userProfile: any = {};
  @Input() activeDropdown: string = '';

  @Output() toggle = new EventEmitter<string>();
  @Output() selection = new EventEmitter<{ option: string; key: string }>();
}
