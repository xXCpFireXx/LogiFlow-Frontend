import { describe, it, expect, beforeEach, vi } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Setting } from './setting';
import { USER_PROFILE_MOCK } from './setting.mock';

describe('Setting (Componente Principal)', () => {
  let component: Setting;
  let fixture: ComponentFixture<Setting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Setting],
    }).compileComponents();

    fixture = TestBed.createComponent(Setting);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debe restaurar los valores iniciales al ejecutar onCancel', () => {
    // Simulamos un cambio previo
    component.userProfile.fullName = 'Nombre Editado';

    component.onCancel();

    expect(component.userProfile.fullName).toBe(USER_PROFILE_MOCK.fullName);
  });

  it('debe actualizar el perfil cuando se selecciona una opción de lenguaje', () => {
    const data = { option: 'French (FR)', key: 'language' };
    component.handleSelection(data);

    expect(component.userProfile.language).toBe('French (FR)');
    expect(component.activeDropdown).toBe(''); // Debe cerrarse
  });
});
