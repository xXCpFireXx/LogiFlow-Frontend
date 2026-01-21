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
  fullName: 'Cristian Penagos',
  email: 'cris@logiflow.com',
  role: 'LogiFlow Master',
  language: 'English (US)',
  timezone: 'Eastern Time (US & Canada) (UTC-05:00)',
  emailNotifications: true,
  betaFeatures: false,
};

export const ICONS = {
  USER: 'M4 22q-.825 0-1.412-.587T2 20V9q0-.825.588-1.412T4 7h5V4q0-.825.588-1.412T11 2h2q.825 0 1.413.588T15 4v3h5q.825 0 1.413.588T22 9v11q0 .825-.587 1.413T20 22zm2-4h6v-.45q0-.425-.238-.788T11.1 16.2q-.5-.225-1.012-.337T9 15.75t-1.088.113T6.9 16.2q-.425.2-.663.563T6 17.55zm8-1.5h4V15h-4zM9 15q.625 0 1.063-.437T10.5 13.5t-.437-1.062T9 12t-1.062.438T7.5 13.5t.438 1.063T9 15m5-1.5h4V12h-4zM11 9h2V4h-2z',
  MAIL: 'M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z',
  SHIELD: 'M12 19.9q2.425-.75 4.05-2.962T17.95 12H12V4.125l-6 2.25v5.175q0 .175.05.45H12zm0 2q-.175 0-.325-.025t-.3-.075Q8 20.675 6 17.638T4 11.1V6.375q0-.625.363-1.125t.937-.725l6-2.25q.35-.125.7-.125t.7.125l6 2.25q.575.225.938.725T20 6.375V11.1q0 3.5-2 6.538T12.625 21.8q-.15.05-.3.075T12 21.9',
  LOCK: 'M21 21l-18-18 M15 11V7a5 5 0 0 0-10 0v4',
};
