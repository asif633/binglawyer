import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LawyerdetailComponent } from './lawyerdetail.component';

describe('LawyerdetailComponent', () => {
  let component: LawyerdetailComponent;
  let fixture: ComponentFixture<LawyerdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LawyerdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LawyerdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
