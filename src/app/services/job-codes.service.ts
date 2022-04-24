import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { JobCode } from '../interfaces/JobCode';
import { JOB_CODES } from '../collections/job-codes-collection';

@Injectable({
  providedIn: 'root'
})
export class JobCodeService {
    //! PRODUCTION VERSION
    // private apiUrl = 'http://localhost:3000/job_codes'
    
    // constructor(private host: HttpClient) { }
    
    // getJobs(): Observable<Job[]> {
    //   return this.host.get<Job[]>(this.apiUrl);
    // }
  
    //? DEMO VERSION

    constructor() {}
    getJobCodes(): JobCode[] {
      return JOB_CODES;
    }    
  
}
