import { TitleHeaderMain } from "../models/TitleHeaderMain"

export interface ReportCard {
    titulo: string;
    valor: string;
    description: string;
    icon: string;
}

export interface RegionData {
    region: string,
    valor: number
}
export interface PerformanceChart {
    series: number,
    categories: string
}

export interface Alerts {
    type: string,
    typeClass: string,
    icon: string,
    shipmentId: string,
    message: string,
    date: string,
    action: string
}

export interface ReportData {
    header: TitleHeaderMain;
    cards: ReportCard[];
    regionData: RegionData[];
    performanceChart: PerformanceChart;
    alerts: Alerts
}