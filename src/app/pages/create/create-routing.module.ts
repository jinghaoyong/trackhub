import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalesQuotationComponent } from './sales-quotation/sales-quotation.component';

const routes: Routes = [
    {
        path: 'add',
        component: SalesQuotationComponent
    },
    {
        path: 'edit',
        component: SalesQuotationComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CreateRoutingModule { }