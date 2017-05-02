import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LawyercardComponent } from './lawyercard.component';

describe('LawyercardComponent', () => {
  let component: LawyercardComponent;
  let fixture: ComponentFixture<LawyercardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LawyercardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LawyercardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
