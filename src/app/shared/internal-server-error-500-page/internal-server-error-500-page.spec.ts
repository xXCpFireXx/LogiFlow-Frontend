import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalServerError500Page } from './internal-server-error-500-page';

describe('InternalServerError500Page', () => {
  let component: InternalServerError500Page;
  let fixture: ComponentFixture<InternalServerError500Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternalServerError500Page]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternalServerError500Page);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
