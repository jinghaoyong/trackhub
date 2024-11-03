import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseAgreementRoutingModule } from './purchase-agreement-routing.module';
import { PurchaseAgreementListingComponent } from './pages/purchase-agreement-listing/purchase-agreement-listing.component';
import { PurchaseAgreementDetailsComponent } from './pages/purchase-agreement-details/purchase-agreement-details.component';


@NgModule({
  declarations: [
    PurchaseAgreementListingComponent,
    PurchaseAgreementDetailsComponent
  ],
  imports: [
    CommonModule,
    PurchaseAgreementRoutingModule
  ]
})
export class PurchaseAgreementModule { }
