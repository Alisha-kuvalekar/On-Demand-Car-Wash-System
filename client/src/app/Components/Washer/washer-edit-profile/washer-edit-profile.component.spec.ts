import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WasherEditProfileComponent } from './washer-edit-profile.component';

describe('WasherEditProfileComponent', () => {
  let component: WasherEditProfileComponent;
  let fixture: ComponentFixture<WasherEditProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WasherEditProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WasherEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
