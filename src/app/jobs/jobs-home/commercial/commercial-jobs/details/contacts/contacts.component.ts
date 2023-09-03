import { Component, Input, OnInit } from '@angular/core';

import { Job } from 'src/app/interfaces/Job';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { getSelectedJob } from 'src/app/store/jobs-table-selectors';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  currentJob$: Observable<Job | null>;

  constructor(private store: Store<{}>, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
   this.currentJob$ = this.store.select(getSelectedJob);
   console.log(this.currentJob$);
  }
}