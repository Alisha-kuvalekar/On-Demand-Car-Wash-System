import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { WasherdashboardComponent } from './washerdashboard.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('WasherdashboardComponent', () => {
  let component: WasherdashboardComponent;
  let fixture: ComponentFixture<WasherdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [RouterTestingModule],
      declarations: [ WasherdashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WasherdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
