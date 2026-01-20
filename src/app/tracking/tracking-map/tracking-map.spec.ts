import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingMap } from './tracking-map';

describe('TrackingMap', () => {
  let component: TrackingMap;
  let fixture: ComponentFixture<TrackingMap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackingMap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackingMap);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
