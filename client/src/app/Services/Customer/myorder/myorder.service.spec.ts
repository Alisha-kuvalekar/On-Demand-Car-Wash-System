import { TestBed } from '@angular/core/testing';

import { MyorderService } from './myorder.service';

describe('MyorderService', () => {
  let service: MyorderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyorderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
