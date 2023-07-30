import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Job } from "../interfaces/Job";
import { Status } from '../interfaces/Status';
import { State } from './jobs-table-reducers';

export const getSelectJob = createFeatureSelector<State>('jobs');

// I might call this something like "getJobsState"
export const jobSelector = createSelector(getSelectJob, (state: State) => state.jobs);

export const getSelectedJob = createSelector(getSelectJob, (state: State) => state.jobs[state.selectedJobIndex]);

export const getSelectedJobId = createSelector(getSelectedJob, (job: Job) => job.id);

export const getSelectStatus = createFeatureSelector<State>('statuses');

export const statusesSelector = createSelector(getSelectStatus, (state: State)=>state.statuses);

export const selectJobById = (jobId: number) => createSelector(getSelectJob, (state: State)=>state.jobs.filter(j => j.id === jobId)[0]);


