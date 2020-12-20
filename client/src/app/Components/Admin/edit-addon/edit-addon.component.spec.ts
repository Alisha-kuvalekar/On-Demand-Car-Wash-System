import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { EditAddonComponent } from './edit-addon.component';
import { RouterTestingModule } from '@angular/router/testing';
describe('EditAddonComponent', () => {
  let component: EditAddonComponent;
  let fixture: ComponentFixture<EditAddonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports :[RouterTestingModule],
      declarations: [ EditAddonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAddonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
