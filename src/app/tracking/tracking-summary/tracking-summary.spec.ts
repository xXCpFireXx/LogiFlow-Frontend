import { describe, it, expect, beforeEach } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrackingSummary } from './tracking-summary';

describe('TrackingSummary', () => {
  let component: TrackingSummary;
  let fixture: ComponentFixture<TrackingSummary>;

  const mockDetails = [
    { label: 'Origen', value: 'Medellín, CO' },
    { label: 'Destino', value: 'Bello, ANT' },
    { label: 'Estado', value: 'En Tránsito' },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackingSummary],
    }).compileComponents();

    fixture = TestBed.createComponent(TrackingSummary);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('details', mockDetails);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería mostrar los detalles del seguimiento en el HTML', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    // Verificamos que las etiquetas y valores se rendericen
    expect(compiled.textContent).toContain('Origen');
    expect(compiled.textContent).toContain('Medellín, CO');
  });
});
