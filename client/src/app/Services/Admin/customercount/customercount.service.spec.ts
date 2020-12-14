import { TestBed } from '@angular/core/testing';

import { CustomercountService } from './customercount.service';

describe('CustomercountService', () => {
  let service: CustomercountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomercountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
