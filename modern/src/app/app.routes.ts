import { Routes } from '@angular/router';
import { AppShell } from './layout/app-shell/app-shell';
import { Dashboard } from './pages/dashboard/dashboard';
import { Projects } from './pages/projects/projects';
import { Jobs } from './pages/jobs/jobs';
import { JobDetails } from './pages/job-details/job-details';

export const routes: Routes = [
  {
    path: '',
    component: AppShell,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: Dashboard,
      },
      {
        path: 'projects',
        component: Projects,
      },
      {
        path: 'jobs',
        component: Jobs,
      },
      {
        path: 'jobs/:jobId',
        component: JobDetails,
      }
    ],
  },
];