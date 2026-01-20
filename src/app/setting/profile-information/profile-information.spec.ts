import { describe, it, expect, beforeEach, vi } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileInformation } from './profile-information';

describe('ProfileInformation', () => {
  let component: ProfileInformation;
  let fixture: ComponentFixture<ProfileInformation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileInformation],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileInformation);
    component = fixture.componentInstance;

    // Seteamos datos mínimos para el render
    component.userProfile = { fullName: 'Cristian', email: 'cris@logiflow.com' };
    component.icons = { USER: 'path' };

    fixture.detectChanges();
  });

  it('debe emitir updatePassword al hacer click en el botón', () => {
    const updateSpy = vi.spyOn(component.updatePassword, 'emit');
    component.onUpdatePassword();
    expect(updateSpy).toHaveBeenCalled();
  });
});
