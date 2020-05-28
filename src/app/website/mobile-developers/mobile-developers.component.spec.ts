import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileDevelopersComponent } from './mobile-developers.component';

describe('MobileDevelopersComponent', () => {
  let component: MobileDevelopersComponent;
  let fixture: ComponentFixture<MobileDevelopersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileDevelopersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileDevelopersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
