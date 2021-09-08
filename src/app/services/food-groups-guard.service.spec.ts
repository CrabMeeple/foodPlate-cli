import { TestBed } from '@angular/core/testing';

import { FoodGroupsGuardService } from './food-groups-guard.service';

describe('FoodGroupsGuardService', () => {
  let service: FoodGroupsGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodGroupsGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
