import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BardChartItem } from './bard-chart-item';

describe('BardChartItem', () => {
  let component: BardChartItem;
  let fixture: ComponentFixture<BardChartItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BardChartItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BardChartItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
