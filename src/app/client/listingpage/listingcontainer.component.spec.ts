import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingcontainerComponent } from './listingcontainer.component';

describe('ListingcontainerComponent', () => {
  let component: ListingcontainerComponent;
  let fixture: ComponentFixture<ListingcontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingcontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
