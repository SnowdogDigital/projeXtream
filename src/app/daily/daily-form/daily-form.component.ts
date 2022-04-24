import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daily-form',
  templateUrl: './daily-form.component.html',
  styleUrls: ['./daily-form.component.css']
})
export class DailyFormComponent implements OnInit {
  reportJobs = ['job1'];

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.reportJobs.push(`job${this.reportJobs.length + 1}`);
    console.log(this.reportJobs);
  }

}
