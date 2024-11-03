import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTING } from 'src/app/core/constants/routing.enum';

@Component({
  selector: 'app-contact-listing',
  templateUrl: './contact-listing.component.html',
  styleUrls: ['./contact-listing.component.scss']
})
export class ContactListingComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;


  constructor(
    private route: Router
  ) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Forms' }, { label: 'Form Wizard', active: true }];
  }

  goVehicleDetailsPage() {
    this.route.navigate([ROUTING.CONTACT, 'id1234']);
  }
  goContactPage() {
    this.route.navigate([ROUTING.CONTACT, 'contact-details']);
  }
}