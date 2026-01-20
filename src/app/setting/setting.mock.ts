import { TitleHeaderMain } from '../models/TitleHeaderMain';

export const SETTING_HEADER: TitleHeaderMain = {
  title: 'Settings',
  description: 'Manage your account settings and operational preferences',
};

export const DROPDOWNS = [
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

export const USER_PROFILE_MOCK = {
  fullName: 'Alex Morgan',
  email: 'alex@logiflow.com',
  role: 'Logistics Manager',
  language: 'English (US)',
  timezone: 'Eastern Time (US & Canada) (UTC-05:00)',
  emailNotifications: true,
  betaFeatures: false,
};
