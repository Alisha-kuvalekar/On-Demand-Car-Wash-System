import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { WashrequestService } from './washrequest.service';

describe('WashrequestService', () => {
  let service: WashrequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule]
    });
    service = TestBed.inject(WashrequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
