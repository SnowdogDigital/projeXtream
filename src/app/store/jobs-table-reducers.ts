import { createReducer, on } from "@ngrx/store";
import { loadJobsSuccess, loadSelectedJob, loadStatusesSuccess } from "./jobs-table-actions";
import { Job } from "../interfaces/Job";
import { Status } from "../interfaces/Status";

export interface State{jobs: Job[], statuses: Status[], selectedJob: Job|{}};

// export const initialState: State = {jobs:[]};
export const initialState: State = {jobs: [], statuses: [], selectedJob: {}};

export const jobsReducer = createReducer(
  initialState.jobs,
  on(loadJobsSuccess, (state, props ) => ({...state, jobs: props.jobs}))
);

export const statusesReducer = createReducer(
  initialState.statuses,
  on(loadStatusesSuccess, (state, props) => ({...state, statuses: props.statuses}))
);

//? reducer for        selectedJob: state.jobs.filter(job => job.id === jobId)
//! jobs array is not found / how to access jobs from store?
export const selectedJobReducer = createReducer(
  initialState.selectedJob,
  // on(loadSelectedJob, (state, props) => ({...state, selectedJob: state.jobs.filter(job => job.id === props.jobId)[0]}))
  on(loadSelectedJob, (state, props) => ({...state, selectedJob: {prompt: 'hello'}}))
);
