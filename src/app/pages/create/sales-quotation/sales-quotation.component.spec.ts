import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesQuotationComponent } from './sales-quotation.component';

describe('SalesQuotationComponent', () => {
  let component: SalesQuotationComponent;
  let fixture: ComponentFixture<SalesQuotationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalesQuotationComponent]
    });
    fixture = TestBed.createComponent(SalesQuotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
