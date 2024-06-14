import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModalModule, NgbDropdownModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { InboxComponent } from './inbox/inbox.component';
import { EmailreadComponent } from './emailread/emailread.component';
import { EmailRoutingModule } from './email-routing.module';
import { UIModule } from '../../shared/ui/ui.module';

@NgModule({
  declarations: [InboxComponent, EmailreadComponent],
  imports: [
    CommonModule,
    UIModule,
    EmailRoutingModule,
    NgbModalModule,
    NgbDropdownModule,
    NgbPaginationModule,
    CKEditorModule,
    FormsModule,
  ]
})
export class EmailModule { }
