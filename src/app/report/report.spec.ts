import { describe, it, expect, beforeEach, vi } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Report } from './report';

globalThis.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

describe('Report', () => {
  let component: Report;
  let fixture: ComponentFixture<Report>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Report],
      providers: [provideRouter([])], // Importante si hay navegación interna
    }).compileComponents();

    fixture = TestBed.createComponent(Report);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
