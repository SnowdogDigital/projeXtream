import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faFilter, faDownload, faUpload } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { setSelectedJobIndex, loadStatuses, loadTable } from 'src/app/store/jobs-table-actions';
import { getSelectedJobIndex, getJobsState, statusesSelector } from 'src/app/store/jobs-table-selectors';
import { Observable } from 'rxjs';

import { Job } from '../../../../interfaces/Job';
import { Status } from '../../../../interfaces/Status';


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
  currentJob$: Observable<Job | null>;
  statuses$: Observable<Status[]>;
  currentJobIndex: number | null;

  constructor(private store: Store<{}>, private route: ActivatedRoute) {
    this.jobs$ = this.store.select(getJobsState);
    this.statuses$ = this.store.select(statusesSelector);
  }

  ngOnInit(): void {
    //* NGRX VERSION
    this.store.dispatch(loadTable());
    this.store.dispatch(loadStatuses());
    const selectedJobIndex$ = this.store.select(getSelectedJobIndex);
    selectedJobIndex$.subscribe((selectedJobIndex) => {
          this.currentJobIndex = selectedJobIndex;
    });
  }
  
  clickSelectedRow(jobIndex: number): void {
    this.store.dispatch(setSelectedJobIndex({jobIndex}));
  }
}