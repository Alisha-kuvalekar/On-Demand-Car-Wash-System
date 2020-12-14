import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WasherScheduledOrdersComponent } from './washer-scheduled-orders.component';

describe('WasherScheduledOrdersComponent', () => {
  let component: WasherScheduledOrdersComponent;
  let fixture: ComponentFixture<WasherScheduledOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WasherScheduledOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WasherScheduledOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
