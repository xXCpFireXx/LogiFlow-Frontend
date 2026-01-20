import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderMainContent } from '../shared/header-main-content/header-main-content';
import { Card as CardGeneric } from '../shared/card/card';
import { GeneralSettings } from './general-settings/general-settings';
import { SETTING_HEADER, DROPDOWNS, USER_PROFILE_MOCK } from './setting.mock';

@Component({
  selector: 'app-setting',
  standalone: true,
  imports: [HeaderMainContent, CardGeneric, CommonModule, FormsModule, GeneralSettings],
  templateUrl: './setting.html',
  styleUrl: './setting.css',
})
export class Setting {
  header = SETTING_HEADER;
  dropdowns = DROPDOWNS;

  userProfile = { ...USER_PROFILE_MOCK };

  activeDropdown: string = '';

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

  updatePassword() {
    console.log('Opening password change modal :D');
  }
}
