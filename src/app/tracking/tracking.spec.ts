import { describe, it, expect, beforeEach, vi } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router'; // Necesario para los comp. hijos que navegan
import { Tracking } from './tracking';

// Necesario porque TrackingMap o Reportes hijos usan ResizeObserver
globalThis.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

describe('Tracking', () => {
  let component: Tracking;
  let fixture: ComponentFixture<Tracking>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tracking],
      providers: [
        provideRouter([]), // Proveedor de rutas para evitar errores en Header o Sidebar hijos
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Tracking);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test de funcionalidad: Verificar que el método de exportar funciona
  it('debería ejecutar la función onExport sin errores', () => {
    const consoleSpy = vi.spyOn(console, 'log');
    component.onExport();
    expect(consoleSpy).toHaveBeenCalledWith('Exporting tracking data...');
  });

  // Test de lógica: Verificar el paso actual del historial
  it('debería calcular correctamente el currentStep', () => {
    const step = component.currentStep;
    expect(step).toBeDefined();
    // Verificamos que sea el primer paso de tu mock por defecto
    expect(step.location).toBe('Lyon, FR');
  });
});
