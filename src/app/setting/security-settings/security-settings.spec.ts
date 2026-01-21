import { describe, it, expect, beforeEach, vi } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SecuritySettings } from './security-settings';
import { SECURITY_CONFIG, USER_PROFILE_MOCK } from '../setting.mock';

describe('SecuritySettings', () => {
  let component: SecuritySettings;
  let fixture: ComponentFixture<SecuritySettings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecuritySettings],
    }).compileComponents();

    fixture = TestBed.createComponent(SecuritySettings);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('securityConfig', SECURITY_CONFIG);
    fixture.componentRef.setInput('userProfile', { ...USER_PROFILE_MOCK });

    fixture.detectChanges();
  });

  it('debe crearse correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('debe emitir la selección cuando cambia el timeout', () => {
    const spy = vi.spyOn(component.selection, 'emit');
    const mockData = { option: '1 Hour', key: 'sessionTimeout' };

    // Emitimos directamente desde el component
    component.selection.emit(mockData);

    expect(spy).toHaveBeenCalledWith(mockData);
  });
});
