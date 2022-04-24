import { Component, OnInit } from '@angular/core';
import { faChevronLeft, faChevronRight, faRefresh } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-charts-home',
  templateUrl: './charts-home.component.html',
  styleUrls: ['./charts-home.component.css']
})
export class ChartsHomeComponent implements OnInit {
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  faRefresh = faRefresh;

  constructor() { }

  ngOnInit(): void {
  }

}
