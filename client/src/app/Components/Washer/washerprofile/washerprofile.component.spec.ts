import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WasherprofileComponent } from './washerprofile.component';

describe('WasherprofileComponent', () => {
  let component: WasherprofileComponent;
  let fixture: ComponentFixture<WasherprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WasherprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WasherprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
