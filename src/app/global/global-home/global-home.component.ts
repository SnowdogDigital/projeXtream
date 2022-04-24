import { Component, OnInit } from '@angular/core';
import { faFilter, faDownload } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-global-home',
  templateUrl: './global-home.component.html',
  styleUrls: ['./global-home.component.css']
})
export class GlobalHomeComponent implements OnInit {
  faFilter = faFilter;
  faDownload = faDownload;

  constructor() { }

  ngOnInit(): void {
  }

}
