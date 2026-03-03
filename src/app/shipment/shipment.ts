import { Component, inject, signal } from '@angular/core';
import { HeaderMainContent } from '../shared/header-main-content/header-main-content';
import { ButtonGeneric } from '../shared/button-generic/button-generic';
import { SHIPMENT_HEADER } from './shipment.mock';
import { ShipmentTable } from './shipment-table/shipment-table';
import { ShipmentService } from './shipment.service';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { map, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-shipment',
  imports: [HeaderMainContent, ButtonGeneric, ShipmentTable],
  templateUrl: './shipment.html',
  styleUrl: './shipment.css',
})
export class Shipment {
  private shipmentService = inject(ShipmentService);

  readonly header = signal(SHIPMENT_HEADER);

  // --- Estado de la paginación ---
  currentPage = signal<number>(0);
  pageSize = signal<number>(10);
  totalItems = signal<number>(0);
  totalPages = signal<number>(0);

  // --- Pipeline Reactivo de Datos ---
  // Convierte la señal 'currentPage' en un Observable. Cada vez que 'currentPage'
  // cambie (por ejemplo, al hacer clic en "Siguiente"), todo este bloque se vuelve a ejecutar.
  readonly shipments = toSignal(
    toObservable(this.currentPage).pipe(
      // switchMap cancela peticiones anteriores si el usuario hace clics muy rápido
      // y hace la nueva petición a tu servicio
      switchMap((page) => this.shipmentService.getAllPaginated(page, this.pageSize())),

      // tap nos permite ejecutar "efectos secundarios" (como actualizar los totales)
      // sin modificar el flujo principal de los datos
      tap((response) => {
        this.totalItems.set(response.total);
        this.totalPages.set(response.totalPages);
      }),

      // map extrae únicamente el arreglo 'data' para que 'shipments' sea de tipo Shipment[]
      map((response) => response.data)
    ),
    { initialValue: [] } // Valor inicial mientras carga la primera vez
  );

  // --- Lógica de la vista ---

  // Este método se llamará cuando app-shipment-table emita el evento (pageChange)
  onPageChange(newPage: number) {
    this.currentPage.set(newPage); // ¡Al cambiar esto, la magia de arriba se ejecuta sola!
  }

  onExport() {
    console.log('Exporting shipment data...');
  }
}
