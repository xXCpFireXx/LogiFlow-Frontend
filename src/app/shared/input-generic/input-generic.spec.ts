import { describe, it, expect, beforeEach, vi } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { InputGeneric } from './input-generic';
import { By } from '@angular/platform-browser';

describe('InputGeneric', () => {
  let component: InputGeneric;
  let fixture: ComponentFixture<InputGeneric>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputGeneric, FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(InputGeneric);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debe emitir valueChange cuando el usuario escribe', () => {
    const emitSpy = vi.spyOn(component.valueChange, 'emit');
    const nuevoValor = 'Cristian Penagos';

    component.onModelChange(nuevoValor);

    expect(emitSpy).toHaveBeenCalledWith(nuevoValor);
  });

  it('debe aplicar la clase de padding izquierdo si hay un icono', () => {
    component.iconPath = 'M12 12...'; // Simulación de path
    fixture.detectChanges();

    const inputElement = fixture.debugElement.query(By.css('input')).nativeElement;
    expect(inputElement.classList.contains('pl-11')).toBe(true);
  });
});
