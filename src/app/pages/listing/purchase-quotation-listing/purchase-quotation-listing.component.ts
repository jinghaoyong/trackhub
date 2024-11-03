import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';

import {DecimalPipe} from '@angular/common';
import {Observable} from 'rxjs';

import {PurchaseQuotation} from './purchase.model';
import {PurchaseQuotationService} from './purchase.service';
import {NgbdSortableHeader, SortEvent} from './sortable.directive';

import {Router} from '@angular/router';

@Component({
  selector: 'app-purchase-quotation-listing',
  templateUrl: './purchase-quotation-listing.component.html',
  styleUrls: ['./purchase-quotation-listing.component.scss'],
  providers: [PurchaseQuotationService, DecimalPipe]
})
export class PurchaseQuotationListingComponent {
// bread crumb items
breadCrumbItems: Array<{}>;
term: any;
// Select2 Dropdown
selectValue: string[];

purchaseQuotations$: Observable<PurchaseQuotation[]>;
total$: Observable<number>;

@ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

constructor(public service: PurchaseQuotationService, private router: Router) {
    this.purchaseQuotations$ = service.purchaseQuotations$;
    this.total$ = service.total$;
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Ecommerce' }, { label: 'purchaseQuotation', active: true }];
    this.selectValue = ['Alaska', 'Hawaii', 'California', 'Nevada', 'Oregon', 'Washington', 'Arizona', 'Colorado', 'Idaho', 'Montana', 'Nebraska', 'New Mexico', 'North Dakota', 'Utah', 'Wyoming', 'Alabama', 'Arkansas', 'Illinois', 'Iowa'];
  }

  onSort({column, direction}: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }

  view() {
    this.router.navigate(['/sales-quotation-view']);
  }

  add() {
    this.router.navigate(['/sales-quotation/add']);
  }

  edit() {
    this.router.navigate(['/sales-quotation/edit']);
  }
}
