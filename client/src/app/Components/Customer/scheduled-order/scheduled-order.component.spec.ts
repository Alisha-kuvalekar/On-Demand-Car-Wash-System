import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ScheduledOrderComponent } from './scheduled-order.component';
import { HttpClientTestingModule} from '@angular/common/http/testing'

describe('ScheduledOrderComponent', () => {
  let component: ScheduledOrderComponent;
  let fixture: ComponentFixture<ScheduledOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports :[RouterTestingModule, HttpClientTestingModule],
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
