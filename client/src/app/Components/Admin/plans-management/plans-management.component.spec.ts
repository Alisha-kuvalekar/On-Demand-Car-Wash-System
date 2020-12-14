import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansManagementComponent } from './plans-management.component';

describe('PlansManagementComponent', () => {
  let component: PlansManagementComponent;
  let fixture: ComponentFixture<PlansManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlansManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlansManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
