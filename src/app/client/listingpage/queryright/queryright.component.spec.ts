import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryrightComponent } from './queryright.component';

describe('QueryrightComponent', () => {
  let component: QueryrightComponent;
  let fixture: ComponentFixture<QueryrightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryrightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
