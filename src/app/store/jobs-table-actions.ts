import { createAction, props } from "@ngrx/store"; 
import { Job } from "../interfaces/Job";
import { Status } from "../interfaces/Status";

export const loadTable = createAction('[Commercial Component] Load Table');

export const loadJobsSuccess = createAction('[Commercial Jobs API] Jobs Load Success', props<{ jobs: Job[] }>())

export const loadStatuses = createAction('[Commercial Component] Load Statuses');

export const loadStatusesSuccess = createAction('[Statuses API] Load Statuses Success', props<{ statuses: Status[] }>());

// trigger this when the user clicks a job
export const setSelectedJobIndex = createAction('[Commercial Job Details] Set Selected Job Index', props<{ jobIndex: number }>())

//? actions for clicking next & prev buttons in job details
// just increments the selected job index
export const changeSelectedJobIndex = createAction('[Commercial Job Details] Change Selected Job Index', props<{ delta: number }>());
