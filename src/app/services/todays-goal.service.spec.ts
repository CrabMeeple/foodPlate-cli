import { TestBed } from '@angular/core/testing';

import { TodaysGoalService } from './todays-goal.service';

describe('TodaysGoalService', () => {
  let service: TodaysGoalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodaysGoalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
