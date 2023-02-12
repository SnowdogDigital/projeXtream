import { createAction, props } from "@ngrx/store"; 
import { Job } from "../interfaces/Job";
import { Status } from "../interfaces/Status";

export const loadTable = createAction('[Commercial Component] Load Table');

export const loadJobsSuccess = createAction('[Commercial Jobs API] Jobs Load Success', props<{ jobs: Job[] }>())

export const loadStatuses = createAction('[Commercial Component] Load Statuses');

export const loadStatusesSuccess = createAction('[Statuses API] Load Statuses Success', props<{ statuses: Status[] }>());

//? action for clicking table row to select job id
export const loadSelectedJob = createAction('[Commercial Job Details] Load Selected Job', props<{ jobId: number }>());

//? actions for clicking next & prev buttons in job details
export const loadNextJob = createAction('[Commercial Job Details] Load Next Job');

export const loadPrevJob = createAction('[Commercial Job Details] Load Prev Job');