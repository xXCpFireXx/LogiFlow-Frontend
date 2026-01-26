import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsCard } from './clients-card';

describe('ClientsCard', () => {
  let component: ClientsCard;
  let fixture: ComponentFixture<ClientsCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientsCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientsCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
