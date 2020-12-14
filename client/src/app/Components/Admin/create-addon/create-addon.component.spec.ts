import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAddonComponent } from './create-addon.component';

describe('CreateAddonComponent', () => {
  let component: CreateAddonComponent;
  let fixture: ComponentFixture<CreateAddonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAddonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAddonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
