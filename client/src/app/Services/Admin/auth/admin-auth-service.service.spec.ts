import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing'
import { RouterTestingModule } from '@angular/router/testing';
import { AdminAuthServiceService } from './admin-auth-service.service';

describe('AdminAuthServiceService', () => {
  let service: AdminAuthServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule, RouterTestingModule]
    });
    service = TestBed.inject(AdminAuthServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
