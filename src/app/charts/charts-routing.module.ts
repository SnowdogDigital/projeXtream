import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChartsHomeComponent } from './charts-home/charts-home.component';

const routes: Routes = [
  {path: '', component: ChartsHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartsRoutingModule { }
