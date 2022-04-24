import { Component, Input, OnInit } from '@angular/core';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  @Input() currentJob: any;

  faCirclePlus = faCirclePlus;

  constructor() { }

  ngOnInit(): void {
  }

}
