import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHireComponent } from './home-hire.component';

describe('HomeHireComponent', () => {
  let component: HomeHireComponent;
  let fixture: ComponentFixture<HomeHireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeHireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeHireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
