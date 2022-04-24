import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { GlobalRoutingModule } from './global-routing.module';
import { GlobalHomeComponent } from './global-home/global-home.component';


@NgModule({
  declarations: [
    GlobalHomeComponent
  ],
  imports: [
    CommonModule,
    GlobalRoutingModule,
    FontAwesomeModule
  ]
})
export class GlobalModule { }
