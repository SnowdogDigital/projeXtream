import { Component, Input, OnInit } from '@angular/core';
import { faCircleLeft, faCircleRight, faCirclePlus, faFilePdf, faMap, faSquareXmark } from '@fortawesome/free-solid-svg-icons';

import { Job } from '../../../../../../../../interfaces/Job';
import { Status } from '../../../../../../../../interfaces/Status';
import { JobsService } from '../../../../../../../../services/jobs.service';
import { StatusesService } from '../../../../../../../../services/statuses.service';

@Component({
  selector: 'app-details-home',
  templateUrl: './details-home.component.html',
  styleUrls: ['./details-home.component.css']
})
export class DetailsHomeComponent implements OnInit {
  @Input() currentJob: any;

  faCircleLeft = faCircleLeft;
  faCircleRight = faCircleRight;
  faCirclePlus = faCirclePlus;
  faFilePdf = faFilePdf;
  faMap = faMap;
  faSquareXmark = faSquareXmark;

  hidden = true;
  jobs: Job[] = [];
  statuses: Status[] = [];
  
  constructor(private jobsService: JobsService, private statusesService: StatusesService) {}
  
  ngOnInit(): void {
    this.statuses = this.statusesService.getStatuses();
  }

  onClickPrev() {
    this.jobs = this.jobsService.getJobs();
    this.currentJob = this.jobs[this.currentJob.id - 2];
  }
  onClickNext() {
    this.jobs = this.jobsService.getJobs();
    this.currentJob = this.jobs[this.currentJob.id + 1];
  }
  

  toggleNotes(e: any) {
    console.log(e.target);
    if (e.target.innerText === 'View') {
      e.target.innerText = "Hide";
      this.hidden = false;
    } else {
      e.target.innerText = "View";
      this.hidden = true;
    }
  }
}
