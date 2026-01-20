import { describe, it, expect, beforeEach } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToggleSwitch } from './toggle-switch';
import { By } from '@angular/platform-browser';

describe('ToggleSwitch', () => {
  let component: ToggleSwitch;
  let fixture: ComponentFixture<ToggleSwitch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleSwitch],
    }).compileComponents();

    fixture = TestBed.createComponent(ToggleSwitch);
    component = fixture.componentInstance;

    // Seteamos valores iniciales antes de la primera detección de cambios
    fixture.componentRef.setInput('label', 'Notificaciones');
    fixture.componentRef.setInput('description', 'Recibir alertas diarias');
    fixture.componentRef.setInput('isActive', true);

    fixture.detectChanges();
  });

  it('debe crearse correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('debe renderizar el label y la descripción correctamente', () => {
    const labelEl = fixture.debugElement.query(By.css('span')).nativeElement;
    const descEl = fixture.debugElement.query(By.css('p')).nativeElement;

    expect(labelEl.textContent).toContain('Notificaciones');
    expect(descEl.textContent).toContain('Recibir alertas diarias');
  });

  it('debe tener el checkbox marcado si isActive es true', () => {
    const inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
    expect(inputEl.checked).toBe(true);
  });

  it('debe cambiar el estado visual cuando isActive cambia', async () => {
    // Usamos setInput en lugar de asignar la propiedad directamente
    fixture.componentRef.setInput('isActive', false);

    // Notificamos a Angular que debe procesar este cambio
    fixture.detectChanges();

    // Esperamos a que el DOM se estabilice (útil por las transiciones de CSS)
    await fixture.whenStable();

    const inputEl = fixture.debugElement.query(By.css('input')).nativeElement;

    // Ahora la verificación pasará sin errores
    expect(inputEl.checked).toBe(false);
  });
});
