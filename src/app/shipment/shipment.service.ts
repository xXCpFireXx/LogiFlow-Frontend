import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Shipment } from "../models/Shipment";
import { PaginatedResponse } from "../models/PaginatedResponse";

@Injectable({
  providedIn: 'root',
})
export class ShipmentService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8080/shipments';

  getAll(): Observable<Shipment[]> {
    return this.http.get<PaginatedResponse<Shipment>>(this.apiUrl).pipe(
      map(response => response.data)
    );
  }

  // OPCIÓN 2 (Recomendada): Si quieres mantener la información de paginación
  // para armar una tabla con páginas.
  getAllPaginated(page: number = 0, size: number = 15): Observable<PaginatedResponse<Shipment>> {
    return this.http.get<PaginatedResponse<Shipment>>(`${this.apiUrl}?page=${page}&size=${size}`);
  }
  // Obtener uno por ID
  getById(id: string): Observable<Shipment> {
    return this.http.get<Shipment>(`${this.apiUrl}/${id}`);
  }

  createShipment(shipmentData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, shipmentData);
  }
}
