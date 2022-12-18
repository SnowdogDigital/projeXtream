import { createReducer, on } from "@ngrx/store";
import { loadJobsSuccess, loadStatusesSuccess } from "./jobs-table-actions";
import { Job } from "../interfaces/Job";

export interface State{jobs: Job[]}

export const initialState: State = {jobs:[]};

export const jobsReducer = createReducer(
  initialState,
  on(loadJobsSuccess, (state, props ) => ({...state, jobs: props.jobs}))
);

export const statusesReducer = createReducer(
  initialState,
  on(loadStatusesSuccess, (state, props) => ({...state, statuses: props.statuses}))
);
