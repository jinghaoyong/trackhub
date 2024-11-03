import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SimplebarAngularModule } from 'simplebar-angular';

import { NgbNavModule, NgbDropdownModule, NgbModalModule, NgbTooltipModule, NgbCollapseModule, NgbPaginationModule, NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { NgStepperModule } from 'angular-ng-stepper';

import { FullCalendarModule } from '@fullcalendar/angular';

import { UIModule } from '../../shared/ui/ui.module';
//import { PagesRoutingModule } from '../pages-routing.module';
import { CreateRoutingModule } from '../create/create-routing.module';


import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

import { SalesQuotationComponent } from './sales-quotation/sales-quotation.component';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
   url: 'https://httpbin.org/post',
};

@NgModule({
  declarations: [SalesQuotationComponent],
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule,
    NgbDropdownModule,
    NgbModalModule,
    UIModule,
    //PagesRoutingModule,
    CreateRoutingModule,
    NgApexchartsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FullCalendarModule,
    NgbNavModule,
    NgbTooltipModule,
    NgbCollapseModule,
    NgbPaginationModule,
    NgbAccordionModule,
    NgStepperModule,
    CdkStepperModule,
    SimplebarAngularModule,
    DropzoneModule,
  ],
  providers: [
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG
    }
  ]
})
export class CreateModule { }
