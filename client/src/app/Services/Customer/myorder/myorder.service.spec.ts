import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { MyorderService } from './myorder.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('MyorderService', () => {
  let service: MyorderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule, RouterTestingModule]
    });
    service = TestBed.inject(MyorderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
