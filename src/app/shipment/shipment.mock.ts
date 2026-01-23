import { TitleHeaderMain } from "../models/TitleHeaderMain";
import { Shipment } from '../models/Shipment';

export const SHIPMENT_HEADER: TitleHeaderMain = {
  title: 'Shipments',
  description: 'Manage and track your active logistics operations',
};

export const SHIPMENTS_MOCK: Shipment[] = [
  {
    id: 'shp-001',
    trackingId: '#SHP-2540',
    eta: '2025-01-20',
    origin: 'New York, USA',
    destination: 'Los Angeles, USA',
    customer: 'Neal Matthews',
    status: 'In Transit'
  },
  {
    id: 'shp-002',
    trackingId: '#SHP-2541',
    eta: '2025-01-19',
    origin: 'Berlin, Germany',
    destination: 'Paris, France',
    customer: 'Jamal Kerrod',
    status: 'Delivered'
  },
  {
    id: 'shp-003',
    trackingId: '#SHP-2542',
    eta: '2025-01-18',
    origin: 'Madrid, Spain',
    destination: 'Barcelona, Spain',
    customer: 'Juanita Bell',
    status: 'Incident'
  },
  {
    id: 'shp-004',
    trackingId: '#SHP-2543',
    eta: '2025-01-17',
    origin: 'London, UK',
    destination: 'Manchester, UK',
    customer: 'Harry Bender',
    status: 'Pending'
  },
  {
    id: 'shp-005',
    trackingId: '#SHP-2544',
    eta: '2025-01-16',
    origin: 'Beijing, China',
    destination: 'Shanghai, China',
    customer: 'Micheal Gough',
    status: 'Delivered'
  },
  {
    id: 'shp-006',
    trackingId: '#LGF-8923',
    eta: '2025-10-24',
    origin: 'Hamburg, Germany',
    destination: 'Lyon, France',
    customer: 'Micheal Gough',
    status: 'In Transit'
  }
];
