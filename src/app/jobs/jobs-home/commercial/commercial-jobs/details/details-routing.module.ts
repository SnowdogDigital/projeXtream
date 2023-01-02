import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailsHomeComponent } from './details-home/details-home.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DesignComponent } from './design/design.component';
import { PermitsComponent } from './permits/permits.component';

const routes: Routes = [
  {path: ':id', component: DetailsHomeComponent, children: [
    {path: ':id', component: AssignmentsComponent},
    {path: 'contacts', component: ContactsComponent},
    {path: 'design', component: DesignComponent},
    {path: 'permits', component: PermitsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsRoutingModule { }
