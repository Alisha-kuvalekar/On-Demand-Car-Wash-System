import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { WasherapprovalService } from './washerapproval.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('WasherapprovalService', () => {
  let service: WasherapprovalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule, RouterTestingModule]
    });
    service = TestBed.inject(WasherapprovalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
