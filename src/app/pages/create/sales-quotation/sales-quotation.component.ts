import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sales-quotation',
  templateUrl: './sales-quotation.component.html',
  styleUrls: ['./sales-quotation.component.scss']
})
export class SalesQuotationComponent {
  // bread crumb items
  breadCrumbItems: Array<{}>;

    
  constructor(private router: Router) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Sales Quotation' }, { label: 'Details', active: true }];
  }

  save() {
    this.router.navigate(['/sales-quotation-view']);
  }
}
