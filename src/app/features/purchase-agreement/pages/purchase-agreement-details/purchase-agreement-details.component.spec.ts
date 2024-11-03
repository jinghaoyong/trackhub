import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseAgreementDetailsComponent } from './purchase-agreement-details.component';

describe('PurchaseAgreementDetailsComponent', () => {
  let component: PurchaseAgreementDetailsComponent;
  let fixture: ComponentFixture<PurchaseAgreementDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchaseAgreementDetailsComponent]
    });
    fixture = TestBed.createComponent(PurchaseAgreementDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
