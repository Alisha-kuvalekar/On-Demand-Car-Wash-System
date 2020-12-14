import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WashrequestsComponent } from './washrequests.component';

describe('WashrequestsComponent', () => {
  let component: WashrequestsComponent;
  let fixture: ComponentFixture<WashrequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WashrequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WashrequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
