import { ApplicationModule, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactListingComponent } from './pages/contact-listing/contact-listing.component';
import { FeaturesRoutingModule } from '../features-routing.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { UIModule } from "../../shared/ui/ui.module";
import { CdkStepperModule } from '@angular/cdk/stepper';
import { NgStepperModule } from 'angular-ng-stepper';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { VehicleDetailsComponent } from './pages/vehicle-details/vehicle-details.component';


@NgModule({
    declarations: [
        ContactListingComponent,
        ContactDetailsComponent,
        VehicleDetailsComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        ContactRoutingModule,
        UIModule,
        CdkStepperModule,
        NgStepperModule
    ]
})
export class ContactModule { }
