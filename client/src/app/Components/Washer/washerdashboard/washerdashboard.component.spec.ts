import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WasherdashboardComponent } from './washerdashboard.component';

describe('WasherdashboardComponent', () => {
  let component: WasherdashboardComponent;
  let fixture: ComponentFixture<WasherdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
