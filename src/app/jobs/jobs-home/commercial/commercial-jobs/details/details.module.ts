import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailsHomeComponent } from './details-home/details-home.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { PermitsComponent } from './permits/permits.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NotesComponent } from './notes/notes.component';
import { DesignComponent } from './design/design.component';


@NgModule({
  declarations: [
    DetailsHomeComponent,
    AssignmentsComponent,
    PermitsComponent,
    ContactsComponent,
    NotesComponent,
    DesignComponent
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    FontAwesomeModule
  ]
})
export class DetailsModule { }
