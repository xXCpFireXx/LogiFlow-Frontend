import { region } from '../models/Region';
import { VolumeChart } from '../models/VolumeChart';

export interface HeaderData {
    title: string;
    description: string;
}

export interface DashboardCard {
    id: number;
    title: string;
    value: string;
    percentage: string;
    icon: string;
    isNegative: boolean;
}



export interface TruckPositions {
    blue: { x: number; y: number };
    orange: { x: number; y: number };
}

export interface DashboardData {
    header: HeaderData;
    cards: DashboardCard[];
    regionData: region[];
    volumeChart: VolumeChart;
    truckPositions: TruckPositions;
}
