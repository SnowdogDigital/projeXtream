import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Job } from "../interfaces/Job";
import { Status } from '../interfaces/Status';
import { JobState } from './jobs-table-reducers';

export const getSelectJob = createFeatureSelector<JobState>('jobs');

// I might call this something like "getJobsState"
export const jobSelector = createSelector(getSelectJob, (state: JobState) => state.jobs);

export const getSelectedJob = createSelector(getSelectJob, (state: JobState) => {
  if (state.selectedJobIndex !== null) {
    return state.jobs[state.selectedJobIndex];
  }
  return null;
}
);

export const getSelectStatus = createFeatureSelector<JobState>('statuses');

export const statusesSelector = createSelector(getSelectStatus, (state: JobState)=>state.statuses);

export const selectJobById = (jobId: number) => createSelector(getSelectJob, (state: JobState)=>state.jobs.filter(j => j.id === jobId)[0]);

export const selectJobByIndex = (index: number) =>
  createSelector(getSelectJob, (state: JobState) => {
    if (index >= 0 && index < state.jobs.length) {
      return state.jobs[index];
    } else {
      return null; // Handle out-of-bounds index
    }
  });

export const selectStatusById = (statusId: number) => createSelector(getSelectStatus, (state: JobState)=>state.statuses.filter(s => s.id === statusId)[0]);
//! status.name from job.status isnt working yet ^