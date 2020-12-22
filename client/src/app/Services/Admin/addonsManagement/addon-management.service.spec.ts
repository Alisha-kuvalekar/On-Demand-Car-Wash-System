import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { AddonManagementService } from './addon-management.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('AddonManagementService', () => {
  let service: AddonManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule, RouterTestingModule]
    });
    service = TestBed.inject(AddonManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
