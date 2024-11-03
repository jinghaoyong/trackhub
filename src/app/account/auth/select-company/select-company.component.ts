import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-company',
  templateUrl: './select-company.component.html',
  styleUrls: ['./select-company.component.scss']
})

export class SelectCompanyComponent {
  constructor(private router: Router) { }

  ngOnInit() {
    document.body.setAttribute('class', 'authentication-bg');
  }

  ngOnDestroy() { 
    document.body.classList.remove('authentication-bg')
  }

  selectCompany () {
    this.router.navigate(['/dashboard']);
  }
}
