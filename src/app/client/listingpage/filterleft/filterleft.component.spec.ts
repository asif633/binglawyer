import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterleftComponent } from './filterleft.component';

describe('FilterleftComponent', () => {
  let component: FilterleftComponent;
  let fixture: ComponentFixture<FilterleftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterleftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterleftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
