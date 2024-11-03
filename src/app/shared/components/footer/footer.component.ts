import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent {
  // set the current year
  year: number = new Date().getFullYear();

  constructor() { }

  ngOnInit() { }
}
