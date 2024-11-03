import { Component, OnInit } from '@angular/core';
// import { transactions, lineColumAreaChart, revenueColumnChart, customerRadialBarChart, orderRadialBarChart, growthColumnChart} from './data';

import {Router} from '@angular/router';
import { DASHBOARD_ITEM_TYPE } from 'src/app/core/constants/enum';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // lineColumAreaChart: ChartType;
  // revenueColumnChart: ChartType;
  // orderRadialBarChart: ChartType;
  // customerRadialBarChart: ChartType;
  // growthColumnChart: ChartType;
  // transactions;
  breadCrumbItems: Array<{}>;
  DASHBOARD_ITEM_TYPE = DASHBOARD_ITEM_TYPE;

  constructor(private router: Router) { }

  ngOnInit() {
    /**
     * Fetches the data
     */
    this.fetchData();
    this.breadCrumbItems = [{ label: 'Minible' }, { label: 'Dashboard', active: true }];
  }

  /**
   * Fetches the data
   */
  private fetchData() {
    
    // this.lineColumAreaChart = lineColumAreaChart;
    // this.revenueColumnChart = revenueColumnChart;
    // this.orderRadialBarChart = orderRadialBarChart;
    // this.customerRadialBarChart = customerRadialBarChart;
    // this.growthColumnChart = growthColumnChart;
    
    // this.transactions = transactions;
  }

  ViewSalesQuotation() {
    this.router.navigate(['/sales-quotation-listing']);
  }

  ViewPurchaseQuotation() {
    this.router.navigate(['/purchase-quotation-listing']);
  }
}
