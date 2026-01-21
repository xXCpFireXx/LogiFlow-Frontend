import { describe, it, expect, beforeEach } from 'vitest'; // Importante para Vitest
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonGeneric } from './button-generic';

describe('ButtonGeneric', () => {
  let component: ButtonGeneric;
  let fixture: ComponentFixture<ButtonGeneric>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonGeneric],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonGeneric);
    component = fixture.componentInstance;

    // ARREGLO: Asignar el input ANTES de detectar cambios
    fixture.componentRef.setInput('label', 'Descargar');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
