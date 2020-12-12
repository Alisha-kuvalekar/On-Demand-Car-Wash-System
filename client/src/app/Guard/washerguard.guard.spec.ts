import { TestBed } from '@angular/core/testing';

import { WasherguardGuard } from './washerguard.guard';

describe('WasherguardGuard', () => {
  let guard: WasherguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(WasherguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
