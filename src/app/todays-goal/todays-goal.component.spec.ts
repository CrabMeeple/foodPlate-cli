import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysGoalComponent } from './todays-goal.component';

describe('TodaysGoalComponent', () => {
  let component: TodaysGoalComponent;
  let fixture: ComponentFixture<TodaysGoalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodaysGoalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodaysGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
