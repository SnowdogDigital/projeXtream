import { createReducer, on } from "@ngrx/store";
import { loadTable } from "./jobs-table-actions";

export interface State{jobs:boolean}

export const initialState: State = {jobs:false};

export const jobsReducer = createReducer(
  initialState,
  on(loadTable, state => ({...state,jobs:true}))
);
