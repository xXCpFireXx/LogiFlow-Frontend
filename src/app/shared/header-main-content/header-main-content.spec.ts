import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMainContent } from './header-main-content';

describe('HeaderMainContent', () => {
  let component: HeaderMainContent;
  let fixture: ComponentFixture<HeaderMainContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderMainContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderMainContent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
