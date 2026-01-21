import { describe, it, expect, beforeEach, vi } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StadisticsGrapic } from './stadistics-grapic';

globalThis.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

describe('StadisticsGrapic', () => {
  let component: StadisticsGrapic;
  let fixture: ComponentFixture<StadisticsGrapic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StadisticsGrapic],
    }).compileComponents();

    fixture = TestBed.createComponent(StadisticsGrapic);
    component = fixture.componentInstance;

    // Si el componente requiere datos iniciales para la gráfica,
    // asegúrate de enviarlos aquí con setInput si son Signals.
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
