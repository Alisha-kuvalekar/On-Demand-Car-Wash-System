import { TestBed } from '@angular/core/testing';

import { CarManagementService } from './car-management.service';

describe('CarManagementService', () => {
  let service: CarManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
