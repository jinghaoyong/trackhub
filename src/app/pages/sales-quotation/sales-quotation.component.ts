import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';

import {DecimalPipe} from '@angular/common';
import {Observable} from 'rxjs';

import {SalesQuotation} from './sales.model';
import {SalesQuotationService} from './sales.service';
import {NgbdSortableHeader, SortEvent} from './sortable.directive';

import {Router} from '@angular/router';

@Component({
  selector: 'app-sales-quotation',
  templateUrl: './sales-quotation.component.html',
  styleUrls: ['./sales-quotation.component.scss'],
  providers: [SalesQuotationService, DecimalPipe]
})
export class SalesQuotationComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;
  term: any;
  // Select2 Dropdown
  selectValue: string[];

  salesQuotations$: Observable<SalesQuotation[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(public service: SalesQuotationService, private router: Router) {
    this.salesQuotations$ = service.salesQuotations$;
    this.total$ = service.total$;
    console.log(this.salesQuotations$);
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Ecommerce' }, { label: 'salesQuotation', active: true }];
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
}
