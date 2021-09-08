import { TestBed } from '@angular/core/testing';

import { LeaveRegisterGuardService } from './leave-register-guard.service';

describe('LeaveRegisterGuardService', () => {
  let service: LeaveRegisterGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeaveRegisterGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
