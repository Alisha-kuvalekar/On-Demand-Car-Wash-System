import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatPlanComponent } from './creat-plan.component';

describe('CreatPlanComponent', () => {
  let component: CreatPlanComponent;
  let fixture: ComponentFixture<CreatPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
