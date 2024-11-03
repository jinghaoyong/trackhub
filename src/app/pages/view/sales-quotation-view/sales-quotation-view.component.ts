import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-sales-quotation-view',
  templateUrl: './sales-quotation-view.component.html',
  styleUrls: ['./sales-quotation-view.component.scss']
})
export class SalesQuotationViewComponent {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  constructor(private router: Router) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Sales Quotation' }, { label: 'Details', active: true }];

    // fetches the data
    this._fetchData();
  }

  /**
   * Fetches the data
   */
  private _fetchData() {
  }

  edit () {
    this.router.navigate(['/sales-quotation/edit']);
  }
}
