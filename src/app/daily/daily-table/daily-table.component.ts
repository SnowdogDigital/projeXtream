import { Component, OnInit } from '@angular/core';
import { faFileCirclePlus, faDownload, faFilter } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-daily-table',
  templateUrl: './daily-table.component.html',
  styleUrls: ['./daily-table.component.css']
})
export class DailyTableComponent implements OnInit {
  faFileCirclePlus = faFileCirclePlus;
  faDownload = faDownload;
  faFilter = faFilter;

  constructor() { }

  ngOnInit(): void {
  }

}
