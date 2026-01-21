import { describe, it, expect, beforeEach } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StatusBadge } from './status-badge';

describe('StatusBadge', () => {
  let component: StatusBadge;
  let fixture: ComponentFixture<StatusBadge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusBadge],
    }).compileComponents();

    fixture = TestBed.createComponent(StatusBadge);
    component = fixture.componentInstance;

    // 1. ARREGLO PARA SIGNALS: Usar setInput en lugar de asignación directa
    // Esto evita el error "Type 'string' is not assignable to type 'InputSignal<string>'"
    fixture.componentRef.setInput('status', 'In Transit');

    // 2. DETECTAR CAMBIOS: Necesario para que Angular procese el nuevo valor
    fixture.detectChanges();

    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
