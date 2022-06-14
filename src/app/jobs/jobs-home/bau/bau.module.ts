import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BauRoutingModule } from './bau-routing.module';
import { BauJobsComponent } from './bau-jobs/bau-jobs.component';


@NgModule({
  declarations: [
    BauJobsComponent
  ],
  imports: [
    CommonModule,
    BauRoutingModule
  ]
})
export class BauModule { }
