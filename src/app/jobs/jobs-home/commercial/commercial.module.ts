import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CommercialRoutingModule } from './commercial-routing.module';
import { CommercialJobsComponent } from './commercial-jobs/commercial-jobs.component';
import { FilterComponent } from './commercial-jobs/filter/filter.component';
import { ImportComponent } from './commercial-jobs/import/import.component';



@NgModule({
  declarations: [
    CommercialJobsComponent,
    FilterComponent,
    ImportComponent,
  ],
  imports: [
    CommonModule,
    CommercialRoutingModule,
    FontAwesomeModule
  ]
})
export class CommercialModule { }
