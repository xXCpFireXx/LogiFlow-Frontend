import { TitleHeaderMain } from '../models/TitleHeaderMain';

export interface DropdownOption {
  key: string;
  label: string;
  options: string[];
  helperText: string;
}

export interface SecurityConfig {
  key: string;
  label: string;
  options: string[];
  helperText: string;
}

export interface UserProfile {
  fullName: string;
  email: string;
  role: string;
  language: string;
  timezone: string;
  emailNotifications: boolean;
  betaFeatures: boolean;
  sessionTimeout: string;
}

export interface SettingData {
  header: TitleHeaderMain;
  dropdowns: DropdownOption[];
  securityConfig: SecurityConfig;
  userProfile: UserProfile;
  icons: any;
}
