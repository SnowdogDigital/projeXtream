import { Component, OnInit } from '@angular/core';
import { faCircleLeft, faCircleRight, faCirclePlus, faFilePdf, faMap, faSquareXmark } from '@fortawesome/free-solid-svg-icons';

import { Job } from '../../../../../../interfaces/Job';
import { Status } from '../../../../../../interfaces/Status';
import { JobsService } from '../../../../../../services/jobs.service';
import { StatusesService } from '../../../../../../services/statuses.service';

import { Router, ActivatedRoute } from '@angular/router';
import { Observable, of, map, switchMap } from 'rxjs';
import { Store } from '@ngrx/store';
import { changeSelectedJobIndex } from 'src/app/store/jobs-table-actions';
import { getSelectJob, getSelectedJob, selectStatusById } from 'src/app/store/jobs-table-selectors';

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

  currentJob$: Observable<Job | null>;
  statuses$: Observable<string | undefined>;
  hidden = true;
  status: number;
  selectedJobIndex: number;
  statusId: number | null;
  
  constructor(private store: Store<{}>, private jobsService: JobsService, private statusesService: StatusesService, private route: ActivatedRoute, private router: Router) {
  }
  
  ngOnInit(): void {
    this.store.select(getSelectJob).subscribe(jobState => {
      const selectedJobIndex = jobState.selectedJobIndex;

      if (selectedJobIndex !== null) {
        this.currentJob$ = this.store.select(getSelectedJob);

        this.statuses$ = this.currentJob$.pipe(
          map(currentJob => currentJob?.status),
          switchMap(statusId => {
            if (statusId !== undefined) {
              return this.store.select(selectStatusById(statusId));
            } else {
              return of('Status Not Found');
            }
          })
        );
      }
    });
  }
  
  
  onClickPrev() {
    this.store.dispatch(changeSelectedJobIndex({ delta: -1 }));
  }
  
  onClickNext() {
    this.store.dispatch(changeSelectedJobIndex({ delta: 1 }));
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
