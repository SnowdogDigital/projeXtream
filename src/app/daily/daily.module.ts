import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DailyRoutingModule } from './daily-routing.module';
import { DailyTableComponent } from './daily-table/daily-table.component';
import { DailyFormComponent } from './daily-form/daily-form.component';
import { DailyFormJobComponent } from './daily-form/daily-form-job/daily-form-job.component';
import { DailyFormTaskComponent } from './daily-form/daily-form-task/daily-form-task.component';


@NgModule({
  declarations: [
    DailyTableComponent,
    DailyFormComponent,
    DailyFormJobComponent,
    DailyFormTaskComponent
  ],
  imports: [
    CommonModule,
    DailyRoutingModule,
    FontAwesomeModule
  ]
})
export class DailyModule { }
