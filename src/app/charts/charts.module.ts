import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ChartsRoutingModule } from './charts-routing.module';
import { ChartsHomeComponent } from './charts-home/charts-home.component';


@NgModule({
  declarations: [
    ChartsHomeComponent
  ],
  imports: [
    CommonModule,
    ChartsRoutingModule,
    FontAwesomeModule
  ]
})
export class ChartsModule { }
