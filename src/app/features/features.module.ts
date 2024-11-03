import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
// import { SalesQuotationViewComponent } from '../pages/view/sales-quotation-view/sales-quotation-view.component';
// import { SalesQuotationComponent } from '../pages/sales-quotation/sales-quotation.component';
// import { SalesQuotationListingComponent } from '../pages/listing/sales-quotation-listing/sales-quotation-listing.component';
// import { PurchaseQuotationListingComponent } from '../pages/listing/purchase-quotation-listing/purchase-quotation-listing.component';

import { UIModule } from '../shared/ui/ui.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardCardComponent } from './dashboard/components/dashboard-card/dashboard-card.component';
import { TranslateModule } from '@ngx-translate/core';
import { PurchaseAgreementListingComponent } from './purchase-agreement/pages/purchase-agreement-listing/purchase-agreement-listing.component';
import { MainListingComponent } from '../shared/components/main-listing/main-listing.component';
import { MainFilterComponent } from '../shared/components/main-filter/main-filter.component';


@NgModule({
  declarations: [
    // SalesQuotationComponent, 
    // SalesQuotationViewComponent, 
    // SalesQuotationListingComponent, 
    // PurchaseQuotationListingComponent
    DashboardComponent,
    DashboardCardComponent,
    MainListingComponent,
    MainFilterComponent,
    PurchaseAgreementListingComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    UIModule,
    TranslateModule
  ],
})
export class FeaturesModule { }
