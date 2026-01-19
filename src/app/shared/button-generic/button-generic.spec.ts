import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonGeneric } from './button-generic';

describe('ButtonGeneric', () => {
  let component: ButtonGeneric;
  let fixture: ComponentFixture<ButtonGeneric>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonGeneric]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonGeneric);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
