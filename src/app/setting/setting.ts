import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderMainContent } from '../shared/header-main-content/header-main-content';
import { Card as CardGeneric } from '../shared/card/card';
import { GeneralSettings } from './general-settings/general-settings';
import { ButtonGeneric } from '../shared/button-generic/button-generic';
import { SETTING_HEADER, DROPDOWNS, USER_PROFILE_MOCK, ICONS, SECURITY_CONFIG, } from './setting.mock';
import { ProfileInformation } from './profile-information/profile-information';
import { SettingService } from './setting.service';
import { SettingData, UserProfile } from './setting.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setting',
  standalone: true,
  imports: [
    HeaderMainContent,
    ButtonGeneric,
    CardGeneric,
    CommonModule,
    FormsModule,
    GeneralSettings,
    ProfileInformation,
  ],
  templateUrl: './setting.html',
  styleUrl: './setting.css',
})
export class Setting implements OnInit {
  private settingService = inject(SettingService);
  private router = inject(Router);

  header = signal<any>(SETTING_HEADER);
  dropdowns = signal<any[]>(DROPDOWNS);
  securityConfig = signal<any>(SECURITY_CONFIG);
  userProfile = signal<UserProfile | any>({ ...USER_PROFILE_MOCK });
  icons = signal<any>(ICONS);

  activeDropdown = signal<string>('');

  ngOnInit(): void {
    // Sincronización con el servidor mediante el servicio de configuración
    this.settingService.getSettingData().subscribe({
      next: (data: SettingData) => {
        console.log('Settings data synchronized:', data);
        this.header.set(data.header);
        this.dropdowns.set(data.dropdowns);
        this.securityConfig.set(data.securityConfig);
        this.userProfile.set(data.userProfile);
        this.icons.set(data.icons);
      },
      error: (err) => {
        console.error('Settings API Error:', err);
        this.router.navigate(['/500']);
      },
    });
  }

  // Métodos de Interfaz
  toggleDropdown(name: string) {
    this.activeDropdown.set(this.activeDropdown() === name ? '' : name);
  }

  handleSelection(data: { option: string; key: string }) {
    const currentProfile = this.userProfile();

    if (data.key === 'language') {
      currentProfile.language = data.option;
    } else if (data.key === 'timezone') {
      currentProfile.timezone = data.option;
    } else if (data.key === 'sessionTimeout') {
      currentProfile.sessionTimeout = data.option;
    }

    this.userProfile.set({ ...currentProfile });
    this.activeDropdown.set('');
  }

  onCancel() {
    this.userProfile.set({ ...USER_PROFILE_MOCK });
    console.log('Changes cancelled, profile restored to mock state');
  }

  onSave() {
    console.log('Profile saved successfully:', this.userProfile());
  }

  onChangeAvatar() {
    console.log('Change avatar clicked');
  }

  onUpdatePassword() {
    console.log('Opening password change modal :D');
  }
}
