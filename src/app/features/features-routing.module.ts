import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { DefaultComponent } from '../pages/dashboards/default/default.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PurchaseAgreementListingComponent } from './purchase-agreement/pages/purchase-agreement-listing/purchase-agreement-listing.component';
import { ROUTING } from '../core/constants/routing.enum';
// import { DefaultComponent } from '../pages/dashboards/default/default.component';
// import { SalesQuotationViewComponent } from '../pages/view/sales-quotation-view/sales-quotation-view.component';
// import { SalesQuotationListingComponent } from '../pages/listing/sales-quotation-listing/sales-quotation-listing.component';
// import { PurchaseQuotationListingComponent } from '../pages/listing/purchase-quotation-listing/purchase-quotation-listing.component';

const routes: Routes = [
  { path: ROUTING.DASHBOARD, component: DashboardComponent },
  { path: ROUTING.PURCHASE_AGREEMENT, component: PurchaseAgreementListingComponent },
  { path: ROUTING.CONTACT, loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
  // { path: 'dashboard', loadChildren: () => import('../features/features.module').then(m => m.FeaturesModule) },
  // { path: 'sales-quotation', loadChildren: () => import('../pages/create/create.module').then(m => m.CreateModule) },
  // { path: 'sales-quotation-view', component:SalesQuotationViewComponent},
  // { path: 'sales-quotation-listing', component:SalesQuotationListingComponent},
  // { path: 'purchase-quotation-listing', component:PurchaseQuotationListingComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
