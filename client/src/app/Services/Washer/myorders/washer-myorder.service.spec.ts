import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { WasherMyorderService } from './washer-myorder.service';

describe('WasherMyorderService', () => {
  let service: WasherMyorderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule]
    });
    service = TestBed.inject(WasherMyorderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
