import { Component, OnInit } from '@angular/core';
import { faFilter, faDownload } from '@fortawesome/free-solid-svg-icons';


import { Job } from '../../interfaces/Job';
import { Status } from '../../interfaces/Status';

import { JobsService } from '../../services/jobs.service';
import { StatusesService } from '../../services/statuses.service';

@Component({
  selector: 'app-jobs-home',
  templateUrl: './jobs-home.component.html',
  styleUrls: ['./jobs-home.component.css']
})
export class JobsHomeComponent implements OnInit {
  faFilter = faFilter;
  faDownload = faDownload;
  
  jobs: Job[] = [];
  statuses: Status[] = [];
  currentJob = {};
  selectedJobId = 0;
  statusIndex = 0;
  tableHidden = false;
  detailsHidden = true;

  constructor(private jobsService: JobsService, private statusesService: StatusesService) {}

  ngOnInit(): void {}

  onClickParent(e: any, job: any) {
    if (e.target.id) {
      this.selectedJobId = parseInt(e.target.id);
      this.detailsHidden = false;
      this.tableHidden = true;
      this.currentJob = this.jobsService.getJob(this.selectedJobId);
      console.log(this.tableHidden, this.currentJob);
    }
  }
  
  onClickChild(e: any, job: any) {
    this.selectedJobId = parseInt(e.target.parentNode.id);
    this.tableHidden = true;
    this.detailsHidden = false;
    this.currentJob = this.jobsService.getJob(this.selectedJobId);
    console.log(this.tableHidden, this.currentJob);
  }

}
