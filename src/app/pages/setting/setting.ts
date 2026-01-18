import { Component, HostListener, ElementRef } from '@angular/core';
import { HeaderMainContent } from '../../components/header-main-content/header-main-content';
import { TitleHeaderMain } from '../../models/TitleHeaderMain';
import { Card as CardGeneric } from '../../components/card/card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputSelect } from '../../components/input-select/input-select';
import { ToggleSwitch } from '../../components/toggle-switch/toggle-switch';

@Component({
  selector: 'app-setting',
  standalone: true,
  imports: [HeaderMainContent, CardGeneric, CommonModule, FormsModule, InputSelect, ToggleSwitch],
  templateUrl: './setting.html',
  styleUrl: './setting.css',
})
export class Setting {
  header: TitleHeaderMain = {
    title: 'Settings',
    description: 'Manage your account settings and operational preferences',
  };

  dropdowns = [
    {
      key: 'language',
      label: 'System Language',
      options: ['English (US)', 'Spanish (ES)', 'French (FR)'],
      helperText: 'This will change the interface language for your dashboard.',
    },
    {
      key: 'timezone',
      label: 'Timezone',
      options: [
        'Eastern Time (US & Canada) (UTC-05:00)',
        'Central Time (US & Canada) (UTC-06:00)',
        'Pacific Time (US & Canada) (UTC-08:00)',
        'Greenwich Mean Time (UTC+00:00)',
      ],
      helperText: '',
    },
  ];

  activeDropdown: string = '';

  toggleDropdown(name: string) {
    this.activeDropdown = this.activeDropdown === name ? '' : name;
  }

  // Ajustamos para actualizar el perfil dinámicamente
  handleSelection(option: string, key: string) {
    if (key === 'language') {
      this.userProfile.language = option;
    } else if (key === 'timezone') {
      this.userProfile.timezone = option;
    }
    this.activeDropdown = ''; // Cerramos al seleccionar
  }

  userProfile = {
    fullName: 'Alex Morgan',
    email: 'alex@logiflow.com',
    role: 'Logistics Manager',
    language: 'English (US)',
    timezone: 'Eastern Time (US & Canada) (UTC-05:00)',
    emailNotifications: true,
    betaFeatures: false,
  };

  updatePassword() {
    console.log('Opening password change modal :D');
  }
}
