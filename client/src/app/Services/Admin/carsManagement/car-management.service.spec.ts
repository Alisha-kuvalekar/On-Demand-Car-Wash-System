import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { CarManagementService } from './car-management.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('CarManagementService', () => {
  let service: CarManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule, RouterTestingModule]
    });
    service = TestBed.inject(CarManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
