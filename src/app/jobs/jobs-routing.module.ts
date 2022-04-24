import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JobsHomeComponent } from './jobs-home/jobs-home.component';
import { CommercialJobsComponent } from './jobs-home/commercial/commercial-jobs/commercial-jobs.component';


const routes: Routes = [
  {path: '', component: JobsHomeComponent},
  { path: 'commercial-jobs', loadChildren: () => import('./jobs-home/commercial/commercial.module').then((m) => m.CommercialModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
