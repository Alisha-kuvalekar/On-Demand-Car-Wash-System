import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { OrderscountService } from './orderscount.service';

describe('OrderscountService', () => {
  let service: OrderscountService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule]
    });
    service = TestBed.inject(OrderscountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
