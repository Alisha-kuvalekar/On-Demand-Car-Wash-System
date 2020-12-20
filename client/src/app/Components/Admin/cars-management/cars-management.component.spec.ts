import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CarsManagementComponent } from './cars-management.component';
import { RouterTestingModule } from '@angular/router/testing';
describe('CarsManagementComponent', () => {
  let component: CarsManagementComponent;
  let fixture: ComponentFixture<CarsManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports :[RouterTestingModule],
      declarations: [ CarsManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
