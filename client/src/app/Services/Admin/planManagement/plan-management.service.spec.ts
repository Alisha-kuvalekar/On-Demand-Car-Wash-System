import { TestBed } from '@angular/core/testing';

import { PlanManagementService } from './plan-management.service';

describe('PlanManagementService', () => {
  let service: PlanManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
