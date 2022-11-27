import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Job } from "../interfaces/Job";

export interface State{jobs: Job[]};

export const getSelectJob = createFeatureSelector<State>('jobs');

export const jobSelector = createSelector(getSelectJob, (state: State)=>state.jobs);