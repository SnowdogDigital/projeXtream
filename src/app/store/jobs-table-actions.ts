import { createAction, props } from "@ngrx/store"; 
import { Job } from "../interfaces/Job";

export const loadTable = createAction('[Commercial Component] Load Table');

export const loadSuccess = createAction('[Commercial Jobs API] Jobs Load Success', props<{ jobs: Job[] }>())