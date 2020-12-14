import { TestBed } from '@angular/core/testing';

import { WasherapprovalService } from './washerapproval.service';

describe('WasherapprovalService', () => {
  let service: WasherapprovalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WasherapprovalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
