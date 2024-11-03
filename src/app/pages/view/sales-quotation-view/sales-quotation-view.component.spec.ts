import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesQuotationViewComponent } from './sales-quotation-view.component';

describe('SalesQuotationViewComponent', () => {
  let component: SalesQuotationViewComponent;
  let fixture: ComponentFixture<SalesQuotationViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalesQuotationViewComponent]
    });
    fixture = TestBed.createComponent(SalesQuotationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
