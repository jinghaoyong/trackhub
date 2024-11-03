import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainListingComponent } from './main-listing.component';

describe('MainListingComponent', () => {
  let component: MainListingComponent;
  let fixture: ComponentFixture<MainListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainListingComponent]
    });
    fixture = TestBed.createComponent(MainListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
