import { Component, Input, OnInit } from '@angular/core';
import { faSquareXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  @Input() hidden: boolean = true;
  faSquareXmark = faSquareXmark;


  constructor() { }

  ngOnInit(): void {
  }

}
