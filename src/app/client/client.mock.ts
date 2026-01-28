import { MetricCardClients } from "../models/Clients";
import { TitleHeaderMain } from "../models/TitleHeaderMain";

export const CLIENTS_HEADER: TitleHeaderMain = {
  title: 'All Customers',
  description: 'Manage your client base and view shipment relationships',
};

export const CLIENTS_METRIC_CARDS: MetricCardClients[] = [
  {
    title:  'Total Clients',
    value: 1000,
    percentage: 4,
    isNegative: false,
  },
  {
    title: 'Active Now',
    value: 300,
    percentage: 0,
    isNegative: false,
  },
  {
    title: 'Pending Approval',
    value: 0,
    percentage: 12,
    isNegative: true,
  },
]
