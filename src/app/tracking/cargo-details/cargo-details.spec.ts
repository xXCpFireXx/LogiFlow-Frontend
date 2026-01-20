import { describe, it, expect, beforeEach } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CargoDetails } from './cargo-details';

describe('CargoDetails', () => {
  let component: CargoDetails;
  let fixture: ComponentFixture<CargoDetails>;

  const mockCargoArray = [
    {
      label: 'Peso',
      value: '1,200 kg',
    },
    {
      label: 'Tipo',
      value: 'Carga General',
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CargoDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(CargoDetails);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('cargoData', mockCargoArray);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar la información de la carga en el HTML', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    // Verificamos que al menos uno de los valores del arreglo aparezca
    expect(compiled.textContent).toContain('1,200 kg');
  });
});
