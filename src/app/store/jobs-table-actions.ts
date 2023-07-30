import { createAction, props } from "@ngrx/store"; 
import { Job } from "../interfaces/Job";
import { Status } from "../interfaces/Status";

export const loadTable = createAction('[Commercial Component] Load Table');

export const loadJobsSuccess = createAction('[Commercial Jobs API] Jobs Load Success', props<{ jobs: Job[] }>())

export const loadStatuses = createAction('[Commercial Component] Load Statuses');

export const loadStatusesSuccess = createAction('[Statuses API] Load Statuses Success', props<{ statuses: Status[] }>());

//? action for clicking table row to select job id
export const loadSelectedJobId = createAction('[Commercial Job Details] Load Selected Job ID', props<{ jobId: number }>());

//? actions for clicking next & prev buttons in job details
// just increments the selected job index
export const loadNextJob = createAction('[Commercial Job Details] Load Next Job');

// just decrements the selected job index (in reducer)
export const loadPrevJob = createAction('[Commercial Job Details] Load Prev Job');

// trigger this when the user clicks a job
export const setSelectedJobIndex = createAction('[Commercial Job Details] Set Selected Job Index', props<{jobIndex: number}>())