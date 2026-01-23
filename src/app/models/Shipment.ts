export type ShipmentStatus = 'In Transit' | 'Delivered' | 'Incident' | 'Pending';

export interface Shipment {
  id: string;
  trackingId: string;
  eta: string;
  origin: string;
  destination: string;
  customer: string;
  status: ShipmentStatus;
}
