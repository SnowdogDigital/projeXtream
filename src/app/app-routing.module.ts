import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { LoginHomeComponent } from './login/login-home/login-home.component';

const routes: Routes = [
  { path: 'charts', loadChildren: () => import('./charts/charts.module').then((m) => m.ChartsModule)},
  { path: 'global', loadChildren: () => import('./global/global.module').then((m) => m.GlobalModule)},
  { path: 'jobs', loadChildren: () => import('./jobs/jobs.module').then((m) => m.JobsModule)},
  { path: 'login', loadChildren: () => import('./login/login.module').then((m) => m.LoginModule)},
  { path: 'user', loadChildren: () => import('./user/user.module').then((m) => m.UserModule)},
  { path: '', component: LoginHomeComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
