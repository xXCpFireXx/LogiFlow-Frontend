import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderMainContent } from '../shared/header-main-content/header-main-content';
import { Card as CardGeneric } from '../shared/card/card';
import { GeneralSettings } from './general-settings/general-settings';
import { ButtonGeneric } from '../shared/button-generic/button-generic';
import { SETTING_HEADER, DROPDOWNS, USER_PROFILE_MOCK, ICONS, SECURITY_CONFIG } from './setting.mock';
import { ProfileInformation } from './profile-information/profile-information';

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
export class Setting {
  header = SETTING_HEADER;
  dropdowns = DROPDOWNS;

  userProfile = { ...USER_PROFILE_MOCK };
  icons = ICONS;

  activeDropdown: string = '';

  securityConfig = SECURITY_CONFIG;

  toggleDropdown(name: string) {
    this.activeDropdown = this.activeDropdown === name ? '' : name;
  }

  handleSelection(data: { option: string; key: string }) {
    if (data.key === 'language') {
      this.userProfile.language = data.option;
    } else if (data.key === 'timezone') {
      this.userProfile.timezone = data.option;
    }
    this.activeDropdown = '';
  }

  onCancel() {
    this.userProfile = { ...USER_PROFILE_MOCK }; // Resetea los cambios
    console.log('Changes cancelled');
  }

  onSave() {
    console.log('Profile saved successfully:', this.userProfile);
  }

  onChangeAvatar() {
    console.log('Change avatar clicked');
  }

  onUpdatePassword() {
    console.log('Opening password change modal :D');
  }
}
