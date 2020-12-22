import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { OrderscountService } from './orderscount.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('OrderscountService', () => {
  let service: OrderscountService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule, RouterTestingModule]
    });
    service = TestBed.inject(OrderscountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
