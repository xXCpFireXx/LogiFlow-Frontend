import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HeaderMainContent } from '../shared/header-main-content/header-main-content';
import { ButtonGeneric } from '../shared/button-generic/button-generic';
import { SHIPMENT_HEADER } from './shipment.mock';
import { ShipmentTable } from './shipment-table/shipment-table';
import { ShipmentService } from './shipment.service';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { map, switchMap, tap } from 'rxjs';
import { Modal } from '../shared/modal/modal';
import { LocationService, CountryData } from '../core/services/location.service';
import { InputSelect } from '../setting/input-select/input-select';

@Component({
  selector: 'app-shipment',
  imports: [HeaderMainContent, ButtonGeneric, ShipmentTable, ReactiveFormsModule, Modal, InputSelect],
  templateUrl: './shipment.html',
  styleUrl: './shipment.css',
})
export class Shipment implements OnInit {
  private shipmentService = inject(ShipmentService);
  private locationService = inject(LocationService);
  private fb = inject(FormBuilder);

  readonly header = signal(SHIPMENT_HEADER);

  // =========================================
  // ESTADO DE LA PAGINACIÓN Y DATOS
  // =========================================
  currentPage = signal<number>(0);
  pageSize = signal<number>(12);
  totalItems = signal<number>(0);
  totalPages = signal<number>(0);

  readonly shipments = toSignal(
    toObservable(this.currentPage).pipe(
      switchMap((page) => this.shipmentService.getAllPaginated(page, this.pageSize())),
      tap((response) => {
        this.totalItems.set(response.total);
        this.totalPages.set(response.totalPages);
      }),
      map((response) => response.data)
    ),
    { initialValue: [] }
  );

  // =========================================
  // ESTADO DEL MODAL, FORMULARIO Y UBICACIONES
  // =========================================
  isModalOpen = signal<boolean>(false);
  shipmentForm!: FormGroup;
  countriesList = signal<CountryData[]>([]);
  originCities = signal<string[]>([]);
  destinationCities = signal<string[]>([]);

  // Computed: Crea un array solo con los nombres de los países para los Selects
  countryNames = computed(() => this.countriesList().map(c => c.country));

  // =========================================
  // ESTADO VISUAL DE LOS INPUT SELECTS CUSTOM
  // =========================================
  // Controlan si el menú desplegable está abierto o cerrado
  isOriginCountryOpen = signal(false);
  isOriginCityOpen = signal(false);
  isDestCountryOpen = signal(false);
  isDestCityOpen = signal(false);

  // Controlan el texto que ve el usuario en el botón del Select
  originCountryDisplay = signal('Select Country');
  originCityDisplay = signal('Select City');
  destCountryDisplay = signal('Select Country');
  destCityDisplay = signal('Select City');


  // =========================================
  // CICLO DE VIDA E INICIALIZACIÓN
  // =========================================
  ngOnInit() {
    this.initForm();
    this.loadCountries();
  }

  initForm() {
    this.shipmentForm = this.fb.group({
      originCountry: ['', Validators.required],
      originCity: [{ value: '', disabled: true }, Validators.required],
      destinationCountry: ['', Validators.required],
      destinationCity: [{ value: '', disabled: true }, Validators.required]
    });

    // Escuchar cambios: Al cambiar el ISO en el formulario, se cargan las ciudades
    this.shipmentForm.get('originCountry')?.valueChanges.subscribe(iso => {
      if (iso) this.onCountryChange(iso, 'origin');
    });

    this.shipmentForm.get('destinationCountry')?.valueChanges.subscribe(iso => {
      if (iso) this.onCountryChange(iso, 'destination');
    });
  }

  loadCountries() {
    this.locationService.getCountriesAndCities().subscribe({
      next: (data) => this.countriesList.set(data),
      error: (err) => console.error('Error fetching locations', err)
    });
  }

  // =========================================
  // LÓGICA DE NEGOCIO Y EVENTOS
  // =========================================
  onPageChange(newPage: number) {
    this.currentPage.set(newPage);
  }

  onExport() {
    console.log('Exporting shipment data...');
  }

  onCountryChange(countryIso: string, type: 'origin' | 'destination') {
    const countryData = this.countriesList().find(c => c.iso2 === countryIso);
    const cities = countryData ? countryData.cities : [];

    if (type === 'origin') {
      this.originCities.set(cities);
      this.shipmentForm.get('originCity')?.enable();
      this.shipmentForm.get('originCity')?.setValue('');
      this.originCityDisplay.set('Select City'); // Reset visual
    } else {
      this.destinationCities.set(cities);
      this.shipmentForm.get('destinationCity')?.enable();
      this.shipmentForm.get('destinationCity')?.setValue('');
      this.destCityDisplay.set('Select City'); // Reset visual
    }
  }

  // =========================================
  // CONTROLADORES DE LOS SELECTS CUSTOM
  // =========================================
  onOriginCountrySelect(countryName: string) {
    const country = this.countriesList().find(c => c.country === countryName);
    if (country) {
      this.originCountryDisplay.set(countryName);
      this.shipmentForm.get('originCountry')?.setValue(country.iso2);
    }
    this.isOriginCountryOpen.set(false);
  }

  onOriginCitySelect(city: string) {
    this.originCityDisplay.set(city);
    this.shipmentForm.get('originCity')?.setValue(city);
    this.isOriginCityOpen.set(false);
  }

  onDestCountrySelect(countryName: string) {
    const country = this.countriesList().find(c => c.country === countryName);
    if (country) {
      this.destCountryDisplay.set(countryName);
      this.shipmentForm.get('destinationCountry')?.setValue(country.iso2);
    }
    this.isDestCountryOpen.set(false);
  }

  onDestCitySelect(city: string) {
    this.destCityDisplay.set(city);
    this.shipmentForm.get('destinationCity')?.setValue(city);
    this.isDestCityOpen.set(false);
  }

  // =========================================
  // CONTROLADORES DEL MODAL Y ENVÍO
  // =========================================
  openModal() {
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);

    // Resetear formulario a su estado original deshabilitado
    this.shipmentForm.reset({
      originCountry: '', originCity: { value: '', disabled: true },
      destinationCountry: '', destinationCity: { value: '', disabled: true }
    });

    // Resetear las etiquetas visuales
    this.originCountryDisplay.set('Select Country');
    this.originCityDisplay.set('Select City');
    this.destCountryDisplay.set('Select Country');
    this.destCityDisplay.set('Select City');
  }

  getCustomerId(): string {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      try {
        const user = JSON.parse(userStr);
        return user.fullName || 'CLIENT-01';
      } catch (e) {
        return 'CLIENT-01';
      }
    }
    return 'CLIENT-01';
  }

  submitShipment() {
    if (this.shipmentForm.invalid) return;

    const values = this.shipmentForm.value;
    const payload = {
      origin: { city: values.originCity, country: values.originCountry },
      destination: { city: values.destinationCity, country: values.destinationCountry },
      customerId: this.getCustomerId()
    };

    this.shipmentService.createShipment(payload).subscribe({
      next: () => {
        this.closeModal();
        this.currentPage.set(this.currentPage()); // Recargar tabla
      },
      error: (err) => console.error('Error creating shipment', err)
    });
  }
}
