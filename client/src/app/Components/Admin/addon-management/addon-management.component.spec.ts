import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddonManagementComponent } from './addon-management.component';

describe('AddonManagementComponent', () => {
  let component: AddonManagementComponent;
  let fixture: ComponentFixture<AddonManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddonManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddonManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
