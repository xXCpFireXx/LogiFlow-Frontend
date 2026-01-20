import { describe, it, expect, beforeEach } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HeaderMainContent } from './header-main-content';

describe('HeaderMainContent', () => {
  let component: HeaderMainContent;
  let fixture: ComponentFixture<HeaderMainContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderMainContent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderMainContent);
    component = fixture.componentInstance;

    // Seteamos los valores de los Signal Inputs
    fixture.componentRef.setInput('title', 'Título de Prueba');
    fixture.componentRef.setInput('description', 'Descripción de prueba');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería mostrar el título correctamente en el HTML', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    // CAMBIO: Usamos 'h1' porque es lo que tienes en tu HTML
    const titleElement = compiled.querySelector('h1');

    expect(titleElement).toBeTruthy();
    expect(titleElement?.textContent?.trim()).toBe('Título de Prueba');
  });

  it('debería mostrar la descripción correctamente en el HTML', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    // Buscamos el span que contiene la descripción
    const descElement = compiled.querySelector('span');

    expect(descElement).toBeTruthy();
    expect(descElement?.textContent?.trim()).toBe('Descripción de prueba');
  });
});
