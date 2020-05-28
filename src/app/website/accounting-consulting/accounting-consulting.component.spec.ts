import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingConsultingComponent } from './accounting-consulting.component';

describe('AccountingConsultingComponent', () => {
  let component: AccountingConsultingComponent;
  let fixture: ComponentFixture<AccountingConsultingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountingConsultingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingConsultingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
