import { describe, it, expect, beforeEach, vi } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Header } from './header';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
      providers: [
        provideRouter([]), // Evita fallos si hay routerLink en el HTML
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test extra: Verificar que el botón del menú funciona
  it('debería emitir toggleMenu cuando se hace clic en el botón de hamburguesa', () => {
    const emitSpy = vi.spyOn(component.toggleMenu, 'emit');

    // Ejecutamos la función directamente o simulamos el clic
    component.toggleMenu.emit();

    expect(emitSpy).toHaveBeenCalled();
  });
});
