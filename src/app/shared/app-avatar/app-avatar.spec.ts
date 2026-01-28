import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAvatar } from './app-avatar';

describe('AppAvatar', () => {
  let component: AppAvatar;
  let fixture: ComponentFixture<AppAvatar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppAvatar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppAvatar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
