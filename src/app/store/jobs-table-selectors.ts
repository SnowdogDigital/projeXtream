import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Job } from "../interfaces/Job";
import { Status } from '../interfaces/Status';

export interface State{jobs: Job[], statuses: Status[]};

export const getSelectJob = createFeatureSelector<State>('jobs');

export const jobSelector = createSelector(getSelectJob, (state: State)=>state.jobs);

export const getSelectStatus = createFeatureSelector<State>('statuses');

export const statusesSelector = createSelector(getSelectStatus, (state: State)=>state.statuses);

// export const getSingleJob = createFeatureSelector<State>('jobs.id');

export const selectJobById = (jobId: number) => createSelector(getSelectJob, (state: State)=>state.jobs.find(j => j.id === jobId));

