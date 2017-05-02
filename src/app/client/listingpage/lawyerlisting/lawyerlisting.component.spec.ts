import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LawyerlistingComponent } from './lawyerlisting.component';

describe('LawyerlistingComponent', () => {
  let component: LawyerlistingComponent;
  let fixture: ComponentFixture<LawyerlistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LawyerlistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LawyerlistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
