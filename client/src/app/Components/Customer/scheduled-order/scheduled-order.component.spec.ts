import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledOrderComponent } from './scheduled-order.component';

describe('ScheduledOrderComponent', () => {
  let component: ScheduledOrderComponent;
  let fixture: ComponentFixture<ScheduledOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduledOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduledOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
