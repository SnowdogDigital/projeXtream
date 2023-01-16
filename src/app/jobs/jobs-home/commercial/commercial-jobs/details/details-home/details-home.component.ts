import { Component, Input, OnInit } from '@angular/core';
import { faCircleLeft, faCircleRight, faCirclePlus, faFilePdf, faMap, faSquareXmark } from '@fortawesome/free-solid-svg-icons';

import { Job } from '../../../../../../interfaces/Job';
import { Status } from '../../../../../../interfaces/Status';
import { JobsService } from '../../../../../../services/jobs.service';
import { StatusesService } from '../../../../../../services/statuses.service';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectJobById } from 'src/app/store/jobs-table-selectors';

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

  // jobs$: Observable<Job[]>; 
  currentJob$: Observable<Job>;
  hidden = true;
  // selectedJobId = 0;
  statuses$: Observable<Status[]>;
  
  constructor(private store: Store<{jobs: Job[]}>, private jobsService: JobsService, private statusesService: StatusesService, private route: ActivatedRoute, private router: Router) {
  }
  
  ngOnInit(): void {
    // this.statuses = this.statusesService.getStatuses();
    // this.currentJob = this.jobsService.getJob(this.selectedJobId);
    const getId = this.route.snapshot.paramMap.get('id');
    const jobId = Number.parseInt(getId!);
    this.currentJob$ = this.store.select(selectJobById(jobId));
    // console.log(jobId);
    // console.log(this.currentJob$.order_no);

  }

  onClickPrev() {
    // this.selectedJobId = this.selectedJobId - 1;
    // this.currentJob = this.jobsService.getJob(this.selectedJobId);
  }
  onClickNext() {
    // this.selectedJobId = this.selectedJobId + 1;
    // this.currentJob = this.jobsService.getJob(this.selectedJobId);
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
