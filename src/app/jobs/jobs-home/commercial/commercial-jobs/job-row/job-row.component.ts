import { Component, Input, OnInit } from '@angular/core';
import { Job } from 'src/app/interfaces/Job';
import { Status } from 'src/app/interfaces/Status';
import { JobsService } from 'src/app/services/jobs.service';
import { StatusesService } from 'src/app/services/statuses.service';
import { statusesSelector } from 'src/app/store/jobs-table-selectors';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
// import { selectJobById } from 'src/app/store/jobs-table-selectors';


@Component({
  selector: 'app-job-row',
  templateUrl: './job-row.component.html',
  styleUrls: ['./job-row.component.css']
})
export class JobRowComponent implements OnInit {
  @Input() job: any; 
  statuses$: Observable<Status[]>;


  constructor(private store: Store<{}>, private jobsService: JobsService, private statusesService: StatusesService, private route: ActivatedRoute, private router: Router) {
    this.statuses$ = this.store.select(statusesSelector);
  }

  ngOnInit(): void {
  }

}
