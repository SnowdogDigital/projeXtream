import { Component, OnInit, Output } from '@angular/core';
import { faFilter, faDownload, faUpload } from '@fortawesome/free-solid-svg-icons';


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
  
  jobs: Job[] = [];
  statuses: Status[] = [];
  selectedJobId = 0;
  statusIndex = 0;
  detailsHidden = true;

  constructor(private jobsService: JobsService, private statusesService: StatusesService) {}

  ngOnInit(): void {
    //! PRODUCTION VERSION
    // this.jobsService.getJobs().subscribe((jobs) => (this.jobs = jobs));
    // this.reviewGroupService.getReviewGroups().subscribe((reviewGroups) => (this.reviewGroups = reviewGroups));
    // this.statusService.getStatuses().subscribe((statuses) => (this.statuses = statuses));
    // this.subStatusService.getSubStatuses().subscribe((subStatuses) => (this.subStatuses = subStatuses));

    //? DEMO VERSION
    this.jobs = this.jobsService.getJobs();
    // this.reviewGroups = this.reviewGroupsService.getReviewGroups();
    this.statuses = this.statusesService.getStatuses();
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
