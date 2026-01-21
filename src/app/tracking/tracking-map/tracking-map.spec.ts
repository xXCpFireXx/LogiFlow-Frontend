import { describe, it, expect, beforeEach } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrackingMap } from './tracking-map';

describe('TrackingMap', () => {
  let component: TrackingMap;
  let fixture: ComponentFixture<TrackingMap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackingMap],
    }).compileComponents();

    fixture = TestBed.createComponent(TrackingMap);
    component = fixture.componentInstance;

    // Mock del objeto truckPositions
    component.truckPositions = {
      blue: { x: 45.75, y: 4.84 },
      orange: { x: 45.72, y: 4.89 },
    };
    component.currentLocation = 'Lyon, FR';

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
