import { createReducer, on } from "@ngrx/store";
import { loadJobsSuccess, loadPrevJob, loadSelectedJobId, loadStatusesSuccess, setSelectedJobIndex } from "./jobs-table-actions";
// import { jobSelector } from "./jobs-table-selectors";
import { Job } from "../interfaces/Job";
import { Status } from "../interfaces/Status";

//* I would call this "JobState"
export interface JobState{jobs: Job[], statuses: Status[], selectedJobIndex: number | null, selectedJobId: number | null};

export const initialState: JobState = {jobs: [], statuses: [], selectedJobIndex: null, selectedJobId: null};

export const jobsReducer = createReducer(
  initialState.jobs,
  on(loadJobsSuccess, (state, props ) => ({...state, jobs: props.jobs})),
  on(setSelectedJobIndex, (state, props) => ({ ...state, selectedJobIndex: props.jobIndex })),

  // brought up from statusReducer
  on(loadStatusesSuccess, (state, props) => ({...state, statuses: props.statuses}))
);

//! not needed
// export const statusesReducer = createReducer(
//   initialState.statuses,
//   on(loadStatusesSuccess, (state, props) => ({...state, statuses: props.statuses})) // this can go into the jobsReducer
// );

//! not needed
// export const selectedJobIdReducer = createReducer(
//   initialState,
//   on(loadSelectedJobId, (state, {jobId} ) => ({...state, selectedJobId: jobId}))
// );

//! not needed
// export const loadPrevJobReducer = createReducer(
//   initialState, 
//   on(loadPrevJob, (state) => {
//     const currentJobIndex = state.jobs.findIndex(job => job.id === state.selectedJobId);
//     const previousJobIndex = currentJobIndex - 1;
//     const previousJob = state.jobs[previousJobIndex];
//     const previousJobId = previousJob ? previousJob.id : state.selectedJobId;
//     console.log(state.selectedJobId);
//     console.log(state.jobs);  
//     console.log(currentJobIndex);
//     return { ...state, selectedJobId: previousJobId };
//   })
//   );


  //! not needed
// export const selectedJobReducers = createReducer (
//   initialState, 
//   on(loadSelectedJobId, selectedJobIdReducer), 
//   on(loadPrevJob, loadPrevJobReducer)
// );