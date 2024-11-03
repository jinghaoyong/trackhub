import { TestBed } from '@angular/core/testing';

import { PurchaseAgreementService } from './purchase-agreement.service';

describe('PurchaseAgreementService', () => {
  let service: PurchaseAgreementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurchaseAgreementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
