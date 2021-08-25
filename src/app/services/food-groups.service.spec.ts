import { TestBed } from '@angular/core/testing';

import { FoodGroupsService } from './food-groups.service';

describe('FoodGroupsService', () => {
  let service: FoodGroupsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodGroupsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
