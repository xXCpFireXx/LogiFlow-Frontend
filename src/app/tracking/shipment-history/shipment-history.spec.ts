import { describe, it, expect, beforeEach } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShipmentHistory } from './shipment-history';

describe('ShipmentHistory', () => {
  let component: ShipmentHistory;
  let fixture: ComponentFixture<ShipmentHistory>;

  const mockHistory = [
    {
      status: 'Enviado',
      location: 'Medellín, CO',
      date: '19 Jan 2026, 10:00 AM',
      isCompleted: true,
    },
    {
      status: 'En Tránsito',
      location: 'Bello, ANT',
      date: '19 Jan 2026, 02:00 PM',
      isCompleted: false,
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShipmentHistory],
    }).compileComponents();

    fixture = TestBed.createComponent(ShipmentHistory);
    component = fixture.componentInstance;

    // Usamos el nombre exacto 'history'
    fixture.componentRef.setInput('history', mockHistory);

    fixture.detectChanges(); // Renderizamos el componente con los datos
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería mostrar la lista de historial en el HTML', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    // Verificamos que se renderice algún dato del mock
    expect(compiled.textContent).toContain('Medellín, CO');
    expect(compiled.textContent).toContain('En Tránsito');
  });
});
