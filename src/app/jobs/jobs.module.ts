import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobsHomeComponent } from './jobs-home/jobs-home.component';


@NgModule({
  declarations: [
    JobsHomeComponent,
  ],
  imports: [
    CommonModule,
    JobsRoutingModule,
    FontAwesomeModule
  ]
})
export class JobsModule { }
