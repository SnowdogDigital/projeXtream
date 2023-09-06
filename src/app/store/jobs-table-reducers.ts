import { createReducer, on } from "@ngrx/store";
import { changeSelectedJobIndex, loadJobsSuccess, loadNotesSuccess, loadStatusesSuccess, setSelectedJobIndex } from "./jobs-table-actions";
import { Job } from "../interfaces/Job";
import { Status } from "../interfaces/Status";
import { Note } from "../interfaces/Note";

export interface JobState{jobs: Job[], statuses: Status[], notes: Note[], selectedJobIndex: number | null, selectedCurrentJob: Job | null};

export const initialState: JobState = {jobs: [], statuses: [], notes: [], selectedJobIndex: null, selectedCurrentJob: null};

export const jobsReducer = createReducer(
  initialState,
  on(loadJobsSuccess, (state, props ) => ({...state, jobs: props.jobs})),
  on(loadStatusesSuccess, (state, props) => ({...state, statuses: props.statuses})),
  on(loadNotesSuccess, (state, props) => ({...state, notes: props.notes})),
  on(setSelectedJobIndex, (state, props) => {
    const newSelectedIndex = props.jobIndex;
  
    if (newSelectedIndex < 0 || newSelectedIndex >= state.jobs.length) {
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
      return state; 
    }

    return { ...state, selectedJobIndex: newSelectedIndex, selectedCurrentJob: newSelectedIndex !== null ? state.jobs[newSelectedIndex] : null};
  })
);

