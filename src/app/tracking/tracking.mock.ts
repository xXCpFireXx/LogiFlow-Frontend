export type TrackingDetail = {
  type: 'origin' | 'destination' | 'carrier' | 'weight';
  label: string;
  value: string;
  subtext: string;
};

export const TRACKING_HEADER = {
  title: 'Tracking',
  description: 'Real-time delivery monitoring',
};

export const TRACKING_DETAILS: TrackingDetail[] = [
  { type: 'origin', label: 'Origin', value: 'Hamburg, DE', subtext: 'Warehouse H-22' },
  {
    type: 'destination',
    label: 'Destination',
    value: 'Lyon, FR',
    subtext: 'Distribution center L-01',
  },
  {
    type: 'carrier',
    label: 'Carrier',
    value: 'DHL Express',
    subtext: 'Service: Express worldwide',
  },
  { type: 'weight', label: 'Weight', value: '450 kg', subtext: '12 Pallets' },
];

export const TRACKING_HISTORY = [
  // {
  //   date: 'Oct 24, 2025',
  //   time: '14:30',
  //   status: 'Delivered',
  //   location: 'Lyon, FR',
  //   description: 'Package delivered',
  //   active: true,
  //   completed: true,
  // },
  // {
  //   date: 'Oct 23, 2025',
  //   time: '09:15',
  //   status: 'Out for Delivery',
  //   location: 'Lyon, FR',
  //   active: false,
  //   completed: true,
  // },
  // {
  //   date: 'Oct 22, 2025',
  //   time: '18:45',
  //   status: 'In Transit',
  //   location: 'Paris, FR',
  //   active: false,
  //   completed: true,
  // },
  {
    date: 'Oct 21, 2025',
    time: '10:00',
    status: 'Processed',
    location: 'Hamburg, DE',
    active: false,
    completed: true,
  },
];

export const CARGO_DETAILS = [
  { label: 'Package Type', value: 'Standard Pallet (EUR)' },
  { label: 'Quantity', value: '12 Units' },
  { label: 'Dimensions', value: '120 x 80 x 144 cm' },
  { label: 'Total Volume', value: '1.38 CBM' },
  { label: 'Commodity', value: 'General Cargo' },
  { label: 'Stackable', value: 'No' },
  { label: 'HS Code', value: '8517.12.00' },
];

export const TRACKING_DOCUMENTS = [
  { name: 'Bill of Lading (BOL)', format: 'PDF', size: '2.4 MB' },
  { name: 'Commercial Invoice', format: 'PDF', size: '1.1 MB' },
  { name: 'Packing List', format: 'PDF', size: '0.8 MB' },
];

export const TRUCK_POSITIONS = {
  blue: { x: 45.7597, y: 4.8422 },
  orange: { x: 45.7238, y: 4.8931 },
};
