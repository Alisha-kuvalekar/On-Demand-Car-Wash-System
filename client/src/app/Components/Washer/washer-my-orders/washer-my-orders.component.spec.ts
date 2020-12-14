import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WasherMyOrdersComponent } from './washer-my-orders.component';

describe('WasherMyOrdersComponent', () => {
  let component: WasherMyOrdersComponent;
  let fixture: ComponentFixture<WasherMyOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WasherMyOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WasherMyOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
