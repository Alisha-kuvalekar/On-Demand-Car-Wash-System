import { TestBed } from '@angular/core/testing';

import { AdminAuthServiceService } from './admin-auth-service.service';

describe('AdminAuthServiceService', () => {
  let service: AdminAuthServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminAuthServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
