import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SettingData } from './setting.model';

@Injectable({
  providedIn: 'root',
})
export class SettingService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/setting';

  getSettingData(): Observable<SettingData> {
    return this.http.get<SettingData>(this.apiUrl);
  }
}
