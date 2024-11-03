import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DASHBOARD_ITEM_TYPE } from 'src/app/core/constants/enum';
import { ROUTING } from 'src/app/core/constants/routing.enum';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.scss']
})
export class DashboardCardComponent {
  @Input() dashboardTitle?: string;
  @Input() dashboardIcon?: string;
  @Input() dashboardDescription?: string;
  @Input() typeItem = DASHBOARD_ITEM_TYPE['PURCHASE_AGREEMENT'];

  readonly prefixTranslate = 'DASHBOARD.';

  constructor(private route: Router) {}

  handleListingPage() {
    switch (this.typeItem) {
      case DASHBOARD_ITEM_TYPE['PURCHASE_AGREEMENT']:
        this.route.navigate([ROUTING.PURCHASE_AGREEMENT]);
        break;
      default:
        break;
    }
  }
}
