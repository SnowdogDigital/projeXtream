import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundHomeComponent } from './page-not-found-home/page-not-found-home.component';

const routes: Routes = [
  {path: '**', component: PageNotFoundHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
