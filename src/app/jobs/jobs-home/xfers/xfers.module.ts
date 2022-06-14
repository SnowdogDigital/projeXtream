import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { XfersRoutingModule } from './xfers-routing.module';
import { XfersJobsComponent } from './xfers-jobs/xfers-jobs.component';


@NgModule({
  declarations: [
    XfersJobsComponent
  ],
  imports: [
    CommonModule,
    XfersRoutingModule
  ]
})
export class XfersModule { }
