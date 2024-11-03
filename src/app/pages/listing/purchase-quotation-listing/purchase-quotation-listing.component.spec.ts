import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseQuotationListingComponent } from './purchase-quotation-listing.component';

describe('PurchaseQuotationListingComponent', () => {
  let component: PurchaseQuotationListingComponent;
  let fixture: ComponentFixture<PurchaseQuotationListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchaseQuotationListingComponent]
    });
    fixture = TestBed.createComponent(PurchaseQuotationListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
