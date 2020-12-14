import { TestBed } from '@angular/core/testing';

import { OrderscountService } from './orderscount.service';

describe('OrderscountService', () => {
  let service: OrderscountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderscountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
