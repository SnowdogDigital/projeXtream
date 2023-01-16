import { Component, Input, OnInit } from '@angular/core';

import { Job } from 'src/app/interfaces/Job';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectJobById } from 'src/app/store/jobs-table-selectors';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  // @Input() currentJob;

  currentJob$: Observable<Job>;

  constructor(private store: Store<{jobs: Job[]}>,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const getId = this.route.snapshot.paramMap.get('id');
    const jobId = Number.parseInt(getId!);
    this.currentJob$ = this.store.select(selectJobById(jobId));
    console.log(jobId);

  }

}
