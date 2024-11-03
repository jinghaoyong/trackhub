import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SalesQuotationComponent } from './sales-quotation.component';

describe('SalesQuotationComponent', () => {
  let component: SalesQuotationComponent;
  let fixture: ComponentFixture<SalesQuotationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesQuotationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesQuotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
