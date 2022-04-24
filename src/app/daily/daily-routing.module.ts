import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DailyTableComponent } from './daily-table/daily-table.component';
import { DailyFormComponent } from './daily-form/daily-form.component';

const routes: Routes = [
  {path: '', component: DailyTableComponent},
  {path: 'form', component: DailyFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DailyRoutingModule { }
