import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing'
import { WasherguardGuard } from './washerguard.guard';
import { RouterTestingModule } from '@angular/router/testing';

describe('WasherguardGuard', () => {
  let guard: WasherguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule, RouterTestingModule]
    });
    guard = TestBed.inject(WasherguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
