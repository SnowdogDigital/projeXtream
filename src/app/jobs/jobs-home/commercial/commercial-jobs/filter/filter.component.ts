import { Component, OnInit } from '@angular/core';
import { faSquareXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  faSquareXmark = faSquareXmark;

  constructor() { }

  ngOnInit(): void {
  }

}
