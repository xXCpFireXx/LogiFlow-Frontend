import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardReport } from './card-report';

describe('CardReport', () => {
  let component: CardReport;
  let fixture: ComponentFixture<CardReport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardReport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardReport);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
