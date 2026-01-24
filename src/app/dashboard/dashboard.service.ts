import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DashboardData } from './dashboard.model';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  // url como variable de entorno futuro back
  private apiUrl = 'http://localhost:3000/dashboard';
  //private apiUrl = 'https://httpstat.us/500';
  constructor(private http: HttpClient) {}

  getDashboardData(): Observable<DashboardData> {
    return this.http.get<DashboardData>(this.apiUrl);
  }
}
