import { Component, OnInit } from '@angular/core';
import { JobCodeService } from '../../../services/job-codes.service';
import { JobCode } from '../../../interfaces/JobCode';

@Component({
  selector: 'app-daily-form-task',
  templateUrl: './daily-form-task.component.html',
  styleUrls: ['./daily-form-task.component.css']
})
export class DailyFormTaskComponent implements OnInit {
  jobCodes: JobCode[] = [];

  constructor(private jobCodeService: JobCodeService) { }

  ngOnInit(): void {
    //! PRODUCTION VERSION
    // this.jobCodeService.getJobCodes().subscribe((jobCodes) => (this.jobCodes = jobCodes));

    //? DEMO VERSION
    this.jobCodes = this.jobCodeService.getJobCodes();

  }

}
