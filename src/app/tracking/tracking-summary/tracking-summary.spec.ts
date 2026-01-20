import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingSummary } from './tracking-summary';

describe('TrackingSummary', () => {
  let component: TrackingSummary;
  let fixture: ComponentFixture<TrackingSummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackingSummary]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackingSummary);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
