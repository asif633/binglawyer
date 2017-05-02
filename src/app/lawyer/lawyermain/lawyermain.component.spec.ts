import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LawyermainComponent } from './lawyermain.component';

describe('LawyermainComponent', () => {
  let component: LawyermainComponent;
  let fixture: ComponentFixture<LawyermainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LawyermainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LawyermainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
