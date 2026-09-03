import { Component, Input, OnInit } from '@angular/core';
import { faSquareXmark } from '@fortawesome/free-solid-svg-icons';
import { Job } from 'src/app/interfaces/Job';
import { Note } from 'src/app/interfaces/Note';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  faSquareXmark = faSquareXmark;
  notes$: Observable<Note[] | null>;
  currentJob$: Observable<Job[] | null>;

  constructor(private store: Store<{}>) { }

  ngOnInit(): void {
  }

}
