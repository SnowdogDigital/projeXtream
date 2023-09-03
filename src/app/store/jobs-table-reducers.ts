import { createReducer, on } from "@ngrx/store";
import { changeSelectedJobIndex, loadJobsSuccess, loadStatusesSuccess, setSelectedJobIndex } from "./jobs-table-actions";
import { Job } from "../interfaces/Job";
import { Status } from "../interfaces/Status";

export interface JobState{jobs: Job[], statuses: Status[], selectedJobIndex: number | null, selectedCurrentJob: Job | null};

export const initialState: JobState = {jobs: [], statuses: [], selectedJobIndex: null, selectedCurrentJob: null};

export const jobsReducer = createReducer(
  initialState,
  on(loadJobsSuccess, (state, props ) => ({...state, jobs: props.jobs})),
  on(loadStatusesSuccess, (state, props) => ({...state, statuses: props.statuses})),
  on(setSelectedJobIndex, (state, props) => {
    const newSelectedIndex = props.jobIndex;
  
    if (newSelectedIndex < 0 || newSelectedIndex >= state.jobs.length) {
      // Invalid index, do nothing or return the current state
      return state;
    }
  
    return {
      ...state,
      selectedJobIndex: newSelectedIndex,
      selectedCurrentJob: state.jobs[newSelectedIndex],
    };
  }),
    on(changeSelectedJobIndex, (state, props) => {
    const newSelectedIndex = state.selectedJobIndex !== null
      ? state.selectedJobIndex + props.delta
      : null;

    if (newSelectedIndex !== null && (newSelectedIndex < 0 || newSelectedIndex >= state.jobs.length)) {
      return state; // Prevent going out of bounds
    }

    return { ...state, selectedJobIndex: newSelectedIndex, selectedCurrentJob: newSelectedIndex !== null ? state.jobs[newSelectedIndex] : null};
  })
);

