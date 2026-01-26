export interface MetricCardClients {
  title: string;
  value: string | number;
  percentage?: number;
  isNegative?: boolean;
}

export interface User {
  id: string;
  fullName: string;
  email: string;
  activeShipment: number;
  status: 'Active' | 'Inactive' | 'Pending';
  avatarColor: string;
  role?: string;
  password?: string;
}
