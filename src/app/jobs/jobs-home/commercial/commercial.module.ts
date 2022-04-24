import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { CommercialRoutingModule } from './commercial-routing.module';
import { CommercialJobsComponent } from './commercial-jobs/commercial-jobs.component';


@NgModule({
  declarations: [
    CommercialJobsComponent
  ],
  imports: [
    CommonModule,
    CommercialRoutingModule,
    FontAwesomeModule
  ]
})
export class CommercialModule { }
