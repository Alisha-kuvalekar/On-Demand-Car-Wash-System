import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { MyorderService } from './myorder.service';

describe('MyorderService', () => {
  let service: MyorderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule]
    });
    service = TestBed.inject(MyorderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
