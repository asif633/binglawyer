import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LawyerdetailcontainerComponent } from './lawyerdetailcontainer.component';

describe('LawyerdetailcontainerComponent', () => {
  let component: LawyerdetailcontainerComponent;
  let fixture: ComponentFixture<LawyerdetailcontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LawyerdetailcontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LawyerdetailcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
