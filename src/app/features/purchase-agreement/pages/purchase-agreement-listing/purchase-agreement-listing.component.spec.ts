import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseAgreementListingComponent } from './purchase-agreement-listing.component';

describe('PurchaseAgreementListingComponent', () => {
  let component: PurchaseAgreementListingComponent;
  let fixture: ComponentFixture<PurchaseAgreementListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchaseAgreementListingComponent]
    });
    fixture = TestBed.createComponent(PurchaseAgreementListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
