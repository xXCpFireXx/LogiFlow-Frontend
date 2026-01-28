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
import { AuthService } from '../auth.service';

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
  private authService = inject(AuthService);

  header = signal<any>(null);
  dropdowns = signal<any[]>([]);
  securityConfig = signal<any>(null);
  userProfile = signal<UserProfile | any>(this.authService.currentUser());
  icons = signal<any>(null);

  // Para la función de "Cancel", guardamos el estado original
  private originalProfileState: any;

  activeDropdown = signal<string>('');

  ngOnInit(): void {
    this.settingService.getSettingData().subscribe({
      next: (data: SettingData) => {
        this.header.set(data.header);
        this.dropdowns.set(data.dropdowns);
        this.securityConfig.set(data.securityConfig);
        this.icons.set(data.icons);

        const loggedUser = this.authService.currentUser();

        const finalProfile = {
          ...loggedUser,
          language: data.userProfile.language,
          timezone: data.userProfile.timezone,
          sessionTimeout: data.userProfile.sessionTimeout,
        };

        this.userProfile.set(finalProfile);
        this.originalProfileState = { ...finalProfile }; // Guardamos copia para cancelar
      },
      error: (err) => this.router.navigate(['/500']),
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
    if (this.originalProfileState) {
      this.userProfile.set({ ...this.originalProfileState });
    }
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
