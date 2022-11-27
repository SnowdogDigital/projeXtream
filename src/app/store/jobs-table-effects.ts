import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { JobsService } from '../services/jobs.service';
import { loadSuccess } from './jobs-table-actions';


@Injectable()
export class JobEffects {

  loadJobs$ = createEffect(() => 
  this.actions$.pipe(
    ofType('[Commercial Component] Load Table'),
    mergeMap(() => this.jobsService.getJobs()
      .pipe(
        map(jobs => (loadSuccess({jobs: jobs}))),
        catchError(() => of({ type: '[Commercial Jobs API] Jobs Load Error' }))
       )
      )
    )
  );

  constructor(
    private actions$: Actions, 
    private jobsService: JobsService
    ) {}

}