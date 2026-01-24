import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentTable } from './shipment-table';

describe('ShipmentTable', () => {
  let component: ShipmentTable;
  let fixture: ComponentFixture<ShipmentTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShipmentTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShipmentTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
