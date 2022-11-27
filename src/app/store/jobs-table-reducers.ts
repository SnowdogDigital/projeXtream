import { createReducer, on } from "@ngrx/store";
import { loadSuccess, loadTable } from "./jobs-table-actions";
import { Job } from "../interfaces/Job";

export interface State{jobs: Job[]}

export const initialState: State = {jobs:[]};

export const jobsReducer = createReducer(
  initialState,
  on(loadSuccess, (state, props ) => ({...state, jobs: props.jobs}))
);
