import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { RouterTestingModule } from '@angular/router/testing';
import { PlanManagementService } from './plan-management.service';

describe('PlanManagementService', () => {
  let service: PlanManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule, RouterTestingModule]
    });
    service = TestBed.inject(PlanManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
