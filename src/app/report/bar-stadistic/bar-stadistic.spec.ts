import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarStadistic } from './bar-stadistic';

describe('BarStadistic', () => {
  let component: BarStadistic;
  let fixture: ComponentFixture<BarStadistic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarStadistic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarStadistic);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
