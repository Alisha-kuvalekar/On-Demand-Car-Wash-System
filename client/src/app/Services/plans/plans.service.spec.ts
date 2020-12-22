import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { PlansService } from './plans.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('PlansService', () => {
  let service: PlansService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule, RouterTestingModule]
    });
    service = TestBed.inject(PlansService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
