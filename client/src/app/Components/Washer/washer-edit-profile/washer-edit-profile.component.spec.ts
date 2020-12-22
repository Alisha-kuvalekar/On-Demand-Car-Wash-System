import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { WasherEditProfileComponent } from './washer-edit-profile.component';
import { HttpClientTestingModule} from '@angular/common/http/testing'

describe('WasherEditProfileComponent', () => {
  let component: WasherEditProfileComponent;
  let fixture: ComponentFixture<WasherEditProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports :[RouterTestingModule, HttpClientTestingModule],
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
