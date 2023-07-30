import { createReducer, on } from "@ngrx/store";
import { loadJobsSuccess, loadPrevJob, loadSelectedJobId, loadStatusesSuccess } from "./jobs-table-actions";
import { jobSelector } from "./jobs-table-selectors";
import { Job } from "../interfaces/Job";
import { Status } from "../interfaces/Status";

export interface State{jobs: Job[], statuses: Status[], selectedJobId: number | null};

export const initialState: State = {jobs: [], statuses: [], selectedJobId: null};

export const jobsReducer = createReducer(
  initialState.jobs,
  on(loadJobsSuccess, (state, props ) => ({...state, jobs: props.jobs}))
);

export const statusesReducer = createReducer(
  initialState.statuses,
  on(loadStatusesSuccess, (state, props) => ({...state, statuses: props.statuses}))
);

export const selectedJobIdReducer = createReducer(
  initialState,
  on(loadSelectedJobId, (state, {jobId} ) => ({...state, selectedJobId: jobId}))
);

export const loadPrevJobReducer = createReducer(
  initialState, 
  on(loadPrevJob, (state) => {
    const currentJobIndex = state.jobs.findIndex(job => job.id === state.selectedJobId);
    const previousJobIndex = currentJobIndex - 1;
    const previousJob = state.jobs[previousJobIndex];
    const previousJobId = previousJob ? previousJob.id : state.selectedJobId;
    console.log(state.selectedJobId);
    console.log(state.jobs);  
    console.log(currentJobIndex);
    return { ...state, selectedJobId: previousJobId };
  })
  );


export const selectedJobReducers = createReducer (
  initialState, 
  on(loadSelectedJobId, selectedJobIdReducer), 
  on(loadPrevJob, loadPrevJobReducer)
);