import { Component, Input, OnInit } from '@angular/core';
import { Status } from 'src/app/interfaces/Status';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectStatusById } from 'src/app/store/jobs-table-selectors';


@Component({
  selector: 'app-job-row',
  templateUrl: './job-row.component.html',
  styleUrls: ['./job-row.component.css']
})
export class JobRowComponent implements OnInit {
  @Input() job: any; 
  statuses$: Observable<string | undefined>;
  // statusName: string | undefined;  
  // status$: Observable<Status | undefined>;

  constructor(private store: Store<{}>, private route: ActivatedRoute, private router: Router) {
  }
  
  ngOnInit(): void {
    this.statuses$ = this.store.select(selectStatusById(this.job.status));
  }
}
  
