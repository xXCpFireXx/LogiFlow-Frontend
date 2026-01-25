export type ShipmentStatus = 'In Transit' | 'Delivered' | 'Incident' | 'Pending';

export interface TrackingDetail {
  type: 'origin' | 'destination' | 'carrier' | 'weight';
  label: string;
  value: string;
  subtext: string;
}

export interface ShipmentHistory {
  date: string;
  time: string;
  status: string;
  location: string;
  description?: string;
  active: boolean;
  completed: boolean;
}

export interface CargoDetail {
  label: string;
  value: string;
}

export interface TrackingDocument {
  name: string;
  format: string;
  size: string;
}

export interface Coordinates {
  x: number;
  y: number;
}

export type TruckPositions = Record<string, Coordinates>;

// 2. Interfaz Principal (La que devuelve el JSON Server)
export interface Shipment {
  id: string;
  trackingId: string;
  eta: string;
  origin: string;
  destination: string;
  customer: string;
  status: ShipmentStatus;
  details?: TrackingDetail[];
  history?: ShipmentHistory[];
  cargoDetails?: CargoDetail[];
  documents?: TrackingDocument[];
  truckPositions?: TruckPositions;
}
