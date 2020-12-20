import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { CustomercountService } from './customercount.service';

describe('CustomercountService', () => {
  let service: CustomercountService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule]
    });
    service = TestBed.inject(CustomercountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
