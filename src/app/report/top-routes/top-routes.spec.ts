import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRoutes } from './top-routes';

describe('TopRoutes', () => {
  let component: TopRoutes;
  let fixture: ComponentFixture<TopRoutes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopRoutes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopRoutes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
