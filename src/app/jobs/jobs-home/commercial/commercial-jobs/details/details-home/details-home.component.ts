import { Component, OnInit } from '@angular/core';
import { faCircleLeft, faCircleRight, faCirclePlus, faFilePdf, faMap, faSquareXmark } from '@fortawesome/free-solid-svg-icons';

import { Job } from '../../../../../../interfaces/Job';
import { Note } from 'src/app/interfaces/Note';

import { Router, ActivatedRoute } from '@angular/router';
import { Observable, of, map, switchMap, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { changeSelectedJobIndex, loadNotes } from 'src/app/store/jobs-table-actions';
import { getSelectJob, getSelectedJob, notesSelector, selectStatusById } from 'src/app/store/jobs-table-selectors';
import { NotesService } from 'src/app/services/notes-service.service';

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

  private selectJobSubscription: Subscription | null = null;
  currentJob$: Observable<Job | null>;
  statuses$: Observable<string | undefined>;
  notes$: Observable<Note[]>;
  
  hidden = true;
  status: number;
  selectedJobIndex: number;
  statusId: number | null;
  
  constructor(private store: Store<{}>, private route: ActivatedRoute, private router: Router, private notes: NotesService) {
    this.notes$ = this.store.select(notesSelector);
  }
  ngOnInit(): void {
    let jobId: number | null = null;
    this.selectJobSubscription = this.store.select(getSelectJob).subscribe(jobState => {
      const selectedJobIndex = jobState.selectedJobIndex;
      
      if (selectedJobIndex !== null) {
        this.currentJob$ = this.store.select(getSelectedJob);
        this.currentJob$.subscribe(selectedJob => {
          if (selectedJob) {
            jobId = selectedJob.id;
          }
        });
        
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
          if (jobId !== null) {
            console.log(jobId);
            this.store.dispatch(loadNotes({jobId}));
          }
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
    if (e.target.innerText === 'View') {
      e.target.innerText = "Hide";
      this.hidden = false;
    } else {
      e.target.innerText = "View";
      this.hidden = true;
    }
  }

  
  ngOnDestroy(): void {
    if (this.selectJobSubscription) {
      this.selectJobSubscription.unsubscribe();
    }
  }
}