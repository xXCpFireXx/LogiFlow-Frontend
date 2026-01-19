import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StadisticsGrapic } from './stadistics-grapic';

describe('StadisticsGrapic', () => {
  let component: StadisticsGrapic;
  let fixture: ComponentFixture<StadisticsGrapic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StadisticsGrapic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StadisticsGrapic);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
