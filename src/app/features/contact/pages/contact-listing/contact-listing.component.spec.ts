import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactListingComponent } from './contact-listing.component';

describe('ContactListingComponent', () => {
  let component: ContactListingComponent;
  let fixture: ComponentFixture<ContactListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactListingComponent]
    });
    fixture = TestBed.createComponent(ContactListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
