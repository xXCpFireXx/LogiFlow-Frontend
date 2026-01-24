import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ReportData } from "./report.model";

@Injectable ({
    providedIn : 'root',
})
export class ReportService {
    private apiUrl =  'http://localhost:3000/report';
    constructor(private http: HttpClient){}

    getReportData(): Observable<ReportData> {
        return this.http.get<ReportData>(this.apiUrl)
    }
}