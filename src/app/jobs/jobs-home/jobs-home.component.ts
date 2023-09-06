import { Component, OnInit } from '@angular/core';
import { faFilter, faDownload } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-jobs-home',
  templateUrl: './jobs-home.component.html',
  styleUrls: ['./jobs-home.component.css']
})
export class JobsHomeComponent implements OnInit {
  faFilter = faFilter;
  faDownload = faDownload;
  

  constructor() {}

  ngOnInit(): void {}


}
