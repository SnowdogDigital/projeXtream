import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  @Input() currentJob: any;
  @ViewChild('aspectSelect', {static: false}) aspectSelect: any;

  faCirclePlus = faCirclePlus;

  aspectAssignments: any = [];
  aspect = '';

  constructor() { }

  ngOnInit(): void {
  }

  onClick(e: any) {
    this.aspect = this.aspectSelect.nativeElement.value;
    this.aspectAssignments.push(this.aspect)
  }
}
