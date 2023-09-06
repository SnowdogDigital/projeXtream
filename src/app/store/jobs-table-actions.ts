import { createAction, props } from "@ngrx/store"; 
import { Job } from "../interfaces/Job";
import { Status } from "../interfaces/Status";
import { Note } from "../interfaces/Note";

export const loadTable = createAction('[Commercial Component] Load Table');

export const loadJobsSuccess = createAction('[Commercial Jobs API] Jobs Load Success', props<{ jobs: Job[] }>())

export const loadStatuses = createAction('[Commercial Component] Load Statuses');

export const loadStatusesSuccess = createAction('[Statuses API] Load Statuses Success', props<{ statuses: Status[] }>());

export const loadNotes = createAction('[Commercial Component] Load Notes');

export const loadNotesSuccess = createAction('[Notes API] Load Notes Success', props<{ notes: Note[] }>());

//* sets selectedJobIndex when job-row is clicked
export const setSelectedJobIndex = createAction('[Commercial Job Details] Set Selected Job Index', props<{ jobIndex: number }>())

//* increments the selectedJobIndex when job arrow btns are clicked
export const changeSelectedJobIndex = createAction('[Commercial Job Details] Change Selected Job Index', props<{ delta: number }>());

