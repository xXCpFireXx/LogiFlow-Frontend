import { describe, it, expect, beforeEach } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BardChartItem } from './bard-chart-item';

describe('BardChartItem', () => {
  let component: BardChartItem;
  let fixture: ComponentFixture<BardChartItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BardChartItem],
    }).compileComponents();

    fixture = TestBed.createComponent(BardChartItem);
    component = fixture.componentInstance;

    // 1. PRIMERO: Seteas los valores de los Inputs usando setInput
    // Esto es obligatorio para Signal Inputs (input())
    fixture.componentRef.setInput('porcentaje', 75);
    fixture.componentRef.setInput('region', 'Norteamérica');

    // 2. SEGUNDO: Detectas los cambios para que el HTML se renderice
    fixture.detectChanges();

    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
