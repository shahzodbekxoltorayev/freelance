import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDevelopersComponent } from './game-developers.component';

describe('GameDevelopersComponent', () => {
  let component: GameDevelopersComponent;
  let fixture: ComponentFixture<GameDevelopersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameDevelopersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameDevelopersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
