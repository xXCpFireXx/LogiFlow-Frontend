import { describe, it, expect, beforeEach } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router'; // IMPORTANTE
import { SideBar } from '../side-bar/side-bar';

describe('SideBar', () => {
  let component: SideBar;
  let fixture: ComponentFixture<SideBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideBar],
      // Proveer un router vacío para que funcionen los routerLinks
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(SideBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
