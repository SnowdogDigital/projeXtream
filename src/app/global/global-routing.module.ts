import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GlobalHomeComponent } from './global-home/global-home.component';


const routes: Routes = [
  {path: '', component: GlobalHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GlobalRoutingModule { }
