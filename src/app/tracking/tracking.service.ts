import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrackingService {
  private baseUrl = 'http://localhost:8081/tracking';

  constructor(private http: HttpClient, private zone: NgZone) {}

  // Obtener la info actual que es el mapa, id del tracking real, y detalles de carga
  getCurrentStatus(shipmentId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/shipments/${shipmentId}/current`);
  }

  // Obtener la línea de tiempo formateada
  getHistory(shipmentId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/shipments/${shipmentId}/history`);
  }

  // Conexión en tiempo real para que el camión se mueva solo
  getRealTimeUpdates(shipmentId: string): Observable<any> {
    return new Observable(observer => {
      const eventSource = new EventSource(`${this.baseUrl}/stream/${shipmentId}`);

      eventSource.onmessage = (event) => {
        this.zone.run(() => {
          observer.next(JSON.parse(event.data));
        });
      };

      eventSource.onerror = (error) => observer.error(error);
      return () => eventSource.close();
    });
  }
}
