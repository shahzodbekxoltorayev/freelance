import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrativeSupportComponent } from './administrative-support.component';

describe('AdministrativeSupportComponent', () => {
  let component: AdministrativeSupportComponent;
  let fixture: ComponentFixture<AdministrativeSupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrativeSupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrativeSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
