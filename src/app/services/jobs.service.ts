import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Job } from '../interfaces/Job';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  private apiUrl = 'http://localhost:3000/jobs'
  
  constructor(private host: HttpClient) { }
  
  getJobs(): Observable<Job[]> {
    return this.host.get<Job[]>(this.apiUrl);
  }

  getJob(id: number): Observable<Job> {
      return this.host.get<Job>(`${this.apiUrl}/${id}`);
}
}