import { TestBed } from '@angular/core/testing';

import { AddonManagementService } from './addon-management.service';

describe('AddonManagementService', () => {
  let service: AddonManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddonManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
