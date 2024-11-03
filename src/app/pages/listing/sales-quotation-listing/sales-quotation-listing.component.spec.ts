import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesQuotationListingComponent } from './sales-quotation-listing.component';

describe('SalesQuotationListingComponent', () => {
  let component: SalesQuotationListingComponent;
  let fixture: ComponentFixture<SalesQuotationListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalesQuotationListingComponent]
    });
    fixture = TestBed.createComponent(SalesQuotationListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
