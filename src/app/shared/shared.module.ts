import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { UIModule } from './ui/ui.module';

import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { LeftSideBarComponent } from './components/left-sidebar/left-sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { FooterComponent } from './components/footer/footer.component';

import { RouterModule } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SimplebarAngularModule } from 'simplebar-angular';
import { UiSwitchModule } from 'ngx-ui-switch';

@NgModule({
  declarations: [
    MainLayoutComponent,
    LeftSideBarComponent,
    TopbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,
    NgbDropdownModule,
    SimplebarAngularModule,
    UiSwitchModule,
    UIModule
  ],
  exports: [
    MainLayoutComponent,
    LeftSideBarComponent,
    TopbarComponent,
    FooterComponent
  ]
})

export class SharedModule { }
