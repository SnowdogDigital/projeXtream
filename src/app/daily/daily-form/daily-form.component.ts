import { Component, OnInit } from '@angular/core';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-daily-form',
  templateUrl: './daily-form.component.html',
  styleUrls: ['./daily-form.component.css']
})
export class DailyFormComponent implements OnInit {
  faSquarePlus = faSquarePlus;
  
  reportJobs = ['job1'];

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.reportJobs.push(`job${this.reportJobs.length + 1}`);
    console.log(this.reportJobs);
  }

}
