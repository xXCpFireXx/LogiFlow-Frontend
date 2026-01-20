import { describe, it, expect, beforeEach } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router'; // Proveedor de rutas
import { SideBar } from './side-bar';

describe('SideBar', () => {
  let component: SideBar;
  let fixture: ComponentFixture<SideBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideBar],
      providers: [
        provideRouter([]), // Esto simula el sistema de rutas para que el SideBar no falle
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SideBar);
    component = fixture.componentInstance;

    // Detectar cambios para que Angular procese los routerLinks del HTML
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
