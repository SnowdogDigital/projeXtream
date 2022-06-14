import { Component, Input, OnInit } from '@angular/core';
import { faCircleLeft, faCircleRight, faCirclePlus, faFilePdf, faMap, faSquareXmark } from '@fortawesome/free-solid-svg-icons';

import { Job } from '../../../../../../interfaces/Job';
import { Status } from '../../../../../../interfaces/Status';
import { JobsService } from '../../../../../../services/jobs.service';
import { StatusesService } from '../../../../../../services/statuses.service';

@Component({
  selector: 'app-details-home',
  templateUrl: './details-home.component.html',
  styleUrls: ['./details-home.component.css']
})
export class DetailsHomeComponent implements OnInit {
  faCircleLeft = faCircleLeft;
  faCircleRight = faCircleRight;
  faCirclePlus = faCirclePlus;
  faFilePdf = faFilePdf;
  faMap = faMap;
  faSquareXmark = faSquareXmark;

  selectedJobId = 1;
  currentJob: any = {};
  hidden = true;
  jobs: Job[] = [];
  statuses: Status[] = [];
  
  constructor(private jobsService: JobsService, private statusesService: StatusesService) {}
  
  ngOnInit(): void {
    this.statuses = this.statusesService.getStatuses();
    this.currentJob = this.jobsService.getJob(this.selectedJobId);
    console.log(this.currentJob);

  }

  onClickPrev() {
    this.selectedJobId = this.selectedJobId - 1;
    this.currentJob = this.jobsService.getJob(this.selectedJobId);
  }
  onClickNext() {
    this.selectedJobId = this.selectedJobId + 1;
    this.currentJob = this.jobsService.getJob(this.selectedJobId);
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
