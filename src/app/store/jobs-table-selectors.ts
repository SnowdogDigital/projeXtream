import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State{jobs:boolean};

export const getSelectJob = createFeatureSelector<State>('jobs');

export const jobSelector = createSelector(getSelectJob, (state: State)=>state.jobs);