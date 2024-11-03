import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTING } from 'src/app/core/constants/routing.enum';
import { ContactListingComponent } from './pages/contact-listing/contact-listing.component';
import { VehicleDetailsComponent } from './pages/vehicle-details/vehicle-details.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';

const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Contact',
    },
    children: [
      {
        path: 'contact-details',
        component: ContactDetailsComponent,
      },
      {
        path: ':id',
        component: VehicleDetailsComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        component: ContactListingComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
