import { TestBed } from '@angular/core/testing';

import { WashrequestService } from './washrequest.service';

describe('WashrequestService', () => {
  let service: WashrequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WashrequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
