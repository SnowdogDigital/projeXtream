import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Job } from '../interfaces/Job';
import { JOBS } from '../collections/jobs-collection';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  //! PRODUCTION VERSION
  private apiUrl = 'http://localhost:3000/jobs'
  
  constructor(private host: HttpClient) { }
  
  getJobs(): Observable<Job[]> {
    return this.host.get<Job[]>(this.apiUrl);
  }

  getJob(id: number): Observable<Job> {
      return this.host.get<Job>(`${this.apiUrl}/${id}`);

  //? DEMO VERSION
  // constructor() {}
  // getJobs(): Job[] {
  //   return JOBS;
  // }

  // getJob(id: number): any {
  //   return JOBS.find(j => j.id === id);
  // }

}
}