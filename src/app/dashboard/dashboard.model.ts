import { region } from '../models/Region';

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

export interface VolumeChart {
    series: number[];
    categories: string[];
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
