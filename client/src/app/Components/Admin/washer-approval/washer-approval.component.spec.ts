import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WasherApprovalComponent } from './washer-approval.component';

describe('WasherApprovalComponent', () => {
  let component: WasherApprovalComponent;
  let fixture: ComponentFixture<WasherApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WasherApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WasherApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
