import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {
  @Input() currentJob: any;

  constructor() { }

  ngOnInit(): void {
  }

}
