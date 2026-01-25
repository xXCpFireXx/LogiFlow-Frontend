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
  id?: string;
  fullName: string;
  email: string;
  role: string;
  avatarColor?: string; // La propiedad clave
  language: string;
  timezone: string;
  sessionTimeout: string;
  emailNotifications?: boolean;
  betaFeatures?: boolean;
}

export interface SettingData {
  header: TitleHeaderMain;
  dropdowns: DropdownOption[];
  securityConfig: SecurityConfig;
  userProfile: UserProfile;
  icons: any;
}
