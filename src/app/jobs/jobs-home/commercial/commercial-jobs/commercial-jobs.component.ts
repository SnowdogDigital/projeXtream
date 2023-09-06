import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faFilter, faDownload, faUpload } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { setSelectedJobIndex, loadStatuses, loadTable, loadNotes } from 'src/app/store/jobs-table-actions';
import { getSelectedJobIndex, getJobsState, statusesSelector, notesSelector } from 'src/app/store/jobs-table-selectors';

import { Job } from '../../../../interfaces/Job';
import { Status } from '../../../../interfaces/Status';
import { Note } from 'src/app/interfaces/Note';


@Component({
  selector: 'app-commercial-jobs',
  templateUrl: './commercial-jobs.component.html',
  styleUrls: ['./commercial-jobs.component.css']
})
export class CommercialJobsComponent implements OnInit {
  faFilter = faFilter;
  faDownload = faDownload;
  faUpload = faUpload;
  
  jobs$: Observable<Job[]>; 
  statuses$: Observable<Status[]>;
  notes$: Observable<Note[]>;
  currentJob$: Observable<Job | null>;
  currentJobIndex: number | null;

  constructor(private store: Store<{}>, private route: ActivatedRoute) {
    this.jobs$ = this.store.select(getJobsState);
    this.statuses$ = this.store.select(statusesSelector);
    this.notes$ = this.store.select(notesSelector);
  }

  ngOnInit(): void {
    //* NGRX VERSION
    this.store.dispatch(loadTable());
    this.store.dispatch(loadStatuses());
    this.store.dispatch(loadNotes());
    const selectedJobIndex$ = this.store.select(getSelectedJobIndex);
    selectedJobIndex$.subscribe((selectedJobIndex) => {
          this.currentJobIndex = selectedJobIndex;
    });
  }
  
  clickSelectedRow(jobIndex: number): void {
    this.store.dispatch(setSelectedJobIndex({jobIndex}));
  }
}