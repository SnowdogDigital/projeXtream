import { Component, OnInit } from '@angular/core';
import { faCircleLeft, faCircleRight, faCirclePlus, faFilePdf, faMap, faSquareXmark } from '@fortawesome/free-solid-svg-icons';

import { Job } from '../../../../../../interfaces/Job';
import { Status } from '../../../../../../interfaces/Status';
import { JobsService } from '../../../../../../services/jobs.service';
import { StatusesService } from '../../../../../../services/statuses.service';

import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectJobById,selectStatusById } from 'src/app/store/jobs-table-selectors';
import { changeSelectedJobIndex } from 'src/app/store/jobs-table-actions';

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
  statuses$: Observable<Status>;
  hidden = true;
  status: number;
  selectedJobIndex: number;
  
  constructor(private store: Store<{jobs: Job[]}>, private jobsService: JobsService, private statusesService: StatusesService, private route: ActivatedRoute, private router: Router) {
  }
  
  ngOnInit(): void {
    // this.statuses = this.statusesService.getStatuses();
    // this.currentJob = this.jobsService.getJob(this.selectedJobId);
    const getId = this.route.snapshot.paramMap.get('id');
    const jobId = Number.parseInt(getId!);
    let statusId = 0;
    this.currentJob$ = this.store.select(selectJobById(jobId));
    this.statuses$ = this.store.select(selectStatusById(statusId));
    //! status.name from job.status isnt working yet ^
    // console.log(this.currentJob$.order_no);

  }


  onClickPrev() {
   this.store.dispatch(changeSelectedJobIndex({delta: -1}));
  }
  onClickNext() {
    this.store.dispatch(changeSelectedJobIndex({delta: 1}));
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
