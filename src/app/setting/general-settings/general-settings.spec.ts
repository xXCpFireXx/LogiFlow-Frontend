import { describe, it, expect, beforeEach, vi } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GeneralSettings } from './general-settings';
import { DROPDOWNS, USER_PROFILE_MOCK, SECURITY_CONFIG } from '../setting.mock';

describe('GeneralSettings', () => {
  let component: GeneralSettings;
  let fixture: ComponentFixture<GeneralSettings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralSettings],
    }).compileComponents();

    fixture = TestBed.createComponent(GeneralSettings);
    component = fixture.componentInstance;

    component.dropdowns = DROPDOWNS;
    component.userProfile = { ...USER_PROFILE_MOCK };
    component.securityConfig = { ...SECURITY_CONFIG };

    fixture.detectChanges();
  });

  it('debe crearse correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('debe emitir el evento toggle cuando un hijo lo solicita', () => {
    const spy = vi.spyOn(component.toggle, 'emit');
    const keyToToggle = 'language';

    component.toggle.emit(keyToToggle);

    expect(spy).toHaveBeenCalledWith(keyToToggle);
  });

  it('debe emitir la selección de opción correctamente', () => {
    const spy = vi.spyOn(component.selection, 'emit');
    const mockSelection = { option: 'Spanish (ES)', key: 'language' };

    component.selection.emit(mockSelection);
    expect(spy).toHaveBeenCalledWith(mockSelection);
  });

  it('debe renderizar la cantidad correcta de selectores (Dropdowns + Security)', () => {
    const selectors = fixture.nativeElement.querySelectorAll('app-input-select');
    expect(selectors.length).toBe(DROPDOWNS.length + 1);
  });
});
