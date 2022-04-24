import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommercialJobsComponent } from './commercial-jobs/commercial-jobs.component';
import { ImportComponent } from './commercial-jobs/import/import.component';
import { FilterComponent } from './commercial-jobs/filter/filter.component';

const routes: Routes = [
  {path: '', component: CommercialJobsComponent},
  {path: 'import', component: ImportComponent},
  {path: 'filter', component: FilterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommercialRoutingModule { }
