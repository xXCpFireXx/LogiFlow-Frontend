import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileNav } from './user-profile-nav';

describe('UserProfileNav', () => {
  let component: UserProfileNav;
  let fixture: ComponentFixture<UserProfileNav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserProfileNav]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserProfileNav);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
