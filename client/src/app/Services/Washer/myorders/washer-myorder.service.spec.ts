import { TestBed } from '@angular/core/testing';

import { WasherMyorderService } from './washer-myorder.service';

describe('WasherMyorderService', () => {
  let service: WasherMyorderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WasherMyorderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
