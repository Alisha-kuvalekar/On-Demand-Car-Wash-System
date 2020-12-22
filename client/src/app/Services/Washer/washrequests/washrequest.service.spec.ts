import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { WashrequestService } from './washrequest.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('WashrequestService', () => {
  let service: WashrequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule, RouterTestingModule]
    });
    service = TestBed.inject(WashrequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
