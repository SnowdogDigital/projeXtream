import { Component, OnInit, Output } from '@angular/core';
import { faFilter, faDownload, faUpload } from '@fortawesome/free-solid-svg-icons';
import { Store, select } from '@ngrx/store';
import { loadStatuses, loadTable } from 'src/app/store/jobs-table-actions';
import { jobSelector, statusesSelector } from 'src/app/store/jobs-table-selectors';
import { first, Observable } from 'rxjs';

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

  constructor(private store: Store<{}>, private jobsService: JobsService, private statusesService: StatusesService) {
    this.jobs$ = this.store.select(jobSelector);
    this.statuses$ = this.store.select(statusesSelector);
  }

  ngOnInit(): void {
    //* NGRX VERSION
    this.store.dispatch(loadTable());
    this.store.dispatch(loadStatuses());
    // this.jobs$.subscribe(res=>console.log(res));

    //! PRODUCTION VERSION
    // this.jobsService.getJobs().subscribe((jobs) => (this.jobs = jobs));
    // this.reviewGroupService.getReviewGroups().subscribe((reviewGroups) => (this.reviewGroups = reviewGroups));
    // this.statusService.getStatuses().subscribe((statuses) => (this.statuses = statuses));
    // this.subStatusService.getSubStatuses().subscribe((subStatuses) => (this.subStatuses = subStatuses));

    //? DEMO VERSION
    // this.jobs = this.jobsService.getJobs();
    // this.reviewGroups = this.reviewGroupsService.getReviewGroups();
    // this.statuses = this.statusesService.getStatuses();
    // this.subStatuses = this.subStatusesService.getSubStatuses();
  }

  onClickParent(e: any, job: any) {
    if (e.target.id) {
      this.selectedJobId = parseInt(e.target.id);
      this.detailsHidden = false;
      console.log(this.selectedJobId);
    }
  }
  
  onClickChild(e: any, job: any) {
    this.selectedJobId = parseInt(e.target.parentNode.id);
    this.detailsHidden = false;
    // this.currentJob = this.jobsService.getJob(this.selectedJobId);
    console.log(this.selectedJobId);
  }

}
