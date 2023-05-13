import { createReducer, on } from "@ngrx/store";
import { loadJobsSuccess, loadSelectedJobId, loadStatusesSuccess } from "./jobs-table-actions";
import { Job } from "../interfaces/Job";
import { Status } from "../interfaces/Status";

export interface State{jobs: Job[], statuses: Status[], selectedJobId: number | null};

// export const initialState: State = {jobs:[]};
export const initialState: State = {jobs: [], statuses: [], selectedJobId: null};

export const jobsReducer = createReducer(
  initialState.jobs,
  on(loadJobsSuccess, (state, props ) => ({...state, jobs: props.jobs}))
);

export const statusesReducer = createReducer(
  initialState.statuses,
  on(loadStatusesSuccess, (state, props) => ({...state, statuses: props.statuses}))
);

//? reducer for        selectedJobId: state.jobs.filter(job => job.id === jobId)
//! jobs array is not found / how to access jobs from store?
// export const selectedJobIdReducer = createReducer(
//   initialState.selectedJobId,
//   // on(loadSelectedJobId, (state, props) => ({...state, selectedJobId: state.jobs.filter(job => job.id === props.jobId)[0]}))
//   on(loadSelectedJobId, (state, props) => ({...state, selectedJobId: props.jobId}))
// );

export const selectedJobIdReducer = createReducer(
  initialState,
  // on(loadSelectedJobId, (state, props) => ({...state, selectedJobId: state.jobs.filter(job => job.id === props.jobId)[0]}))
  on(loadSelectedJobId, (state, { jobId} ) => ({...state, selectedJobId: jobId}))
);
