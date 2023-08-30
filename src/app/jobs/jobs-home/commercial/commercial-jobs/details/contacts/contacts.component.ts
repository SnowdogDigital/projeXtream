import { Component, Input, OnInit } from '@angular/core';

import { Job } from 'src/app/interfaces/Job';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectJobById, selectJobByIndex } from 'src/app/store/jobs-table-selectors';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  selectedJobIndex$: Observable<number>;
  currentJob$: Observable<Job | null>;

  constructor(private store: Store<{selectedJobIndex: number; jobs: Job[]}>,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.selectedJobIndex$ = this.store.select(state => state.selectedJobIndex);    
    this.selectedJobIndex$.subscribe(selectedJobIndex => {
      console.log(this.store.select(selectJobByIndex(selectedJobIndex)));
      console.log('Selected Job Index:', selectedJobIndex);
      this.currentJob$ = this.store.select(selectJobByIndex(selectedJobIndex));
    });
  }
}