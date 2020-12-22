import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing'
import { AdminGuardGuard } from './admin-guard.guard';
import { RouterTestingModule } from '@angular/router/testing';

describe('AdminGuardGuard', () => {
  let guard: AdminGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule, RouterTestingModule]
    });
    guard = TestBed.inject(AdminGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
