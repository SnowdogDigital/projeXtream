import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faFilter, faDownload, faUpload } from '@fortawesome/free-solid-svg-icons';
import { Store, select } from '@ngrx/store';
import { loadSelectedJob, loadStatuses, loadTable } from 'src/app/store/jobs-table-actions';
import { jobSelector, statusesSelector } from 'src/app/store/jobs-table-selectors';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs';

import { Job } from '../../../../interfaces/Job';
import { Status } from '../../../../interfaces/Status';

import { JobsService } from '../../../../services/jobs.service';
import { StatusesService } from '../../../../services/statuses.service';

@Component({
  selector: 'app-commercial-jobs',
  templateUrl: './commercial-jobs.component.html',
  styleUrls: ['./commercial-jobs.component.css']
})
export class CommercialJobsComponent implements OnInit {
  // @Output() selectedJobId: number;
  faFilter = faFilter;
  faDownload = faDownload;
  faUpload = faUpload;
  
  jobs$: Observable<Job[]>; 
  statuses$: Observable<Status[]>;
  selectedJobId = 0;
  statusIndex = 0;
  detailsHidden = true;

  constructor(private store: Store<{}>, private jobsService: JobsService, private statusesService: StatusesService, private route: ActivatedRoute) {
    this.jobs$ = this.store.select(jobSelector);
    this.statuses$ = this.store.select(statusesSelector);
  }

  ngOnInit(): void {
    //* NGRX VERSION
    this.store.dispatch(loadTable());
    this.store.dispatch(loadStatuses());
  }

  clickSelectedRow(jobId: number): void {
    this.store.dispatch(loadSelectedJob({jobId}));
    console.log(jobId);
  }
}