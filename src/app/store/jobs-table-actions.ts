import { createAction, props } from "@ngrx/store"; 
import { Job } from "../interfaces/Job";
import { Status } from "../interfaces/Status";

export const loadTable = createAction('[Commercial Component] Load Table');

export const loadJobsSuccess = createAction('[Commercial Jobs API] Jobs Load Success', props<{ jobs: Job[] }>())

export const loadStatuses = createAction('[Commercial Component] Load Statuses');

export const loadStatusesSuccess = createAction('[Statuses API] Load Statuses Success', props<{ statuses: Status[] }>());