import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { JobsService } from '../services/jobs.service';
import { StatusesService } from '../services/statuses.service';
import { NotesService } from '../services/notes-service.service';
import { loadJobsSuccess, loadNotesSuccess, loadStatusesSuccess } from './jobs-table-actions';


@Injectable()
export class JobEffects {

  loadJobs$ = createEffect(() => 
  this.actions$.pipe(
    ofType('[Commercial Component] Load Table'),
    mergeMap(() => this.jobsService.getJobs()
      .pipe(
        map(jobs => (loadJobsSuccess({jobs: jobs}))),
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

@Injectable()
export class StatusesEffects {

  loadStatuses$ = createEffect(() =>
  this.actions$.pipe(
    ofType('[Commercial Component] Load Statuses'),
    mergeMap(() => this.statusesService.getStatuses()
      .pipe(
        map(statuses => (loadStatusesSuccess({statuses: statuses}))),
        catchError(() => of({type: '[Statuses API] Statuses Load Error' }))
        )
      )
    )
  );

  constructor(
    private actions$: Actions, 
    private statusesService: StatusesService
    ) {}

}

@Injectable()
export class NotesEffects {

  loadNotes$ = createEffect(() =>
  this.actions$.pipe(
    ofType('[Commercial Component] Load Notes'),
    mergeMap(() => this.notesService.getNotes()
      .pipe(
        map(notes => (loadNotesSuccess({notes: notes}))),
        catchError(() => of({type: '[Notes API] Statuses Load Error' }))
        )
      )
    )
  );

  constructor(
    private actions$: Actions, 
    private notesService: NotesService
    ) {}

}
