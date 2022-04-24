import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Status } from '../interfaces/Status';
import { STATUSES } from '../collections/statuses-collection';

@Injectable({
  providedIn: 'root'
})
export class StatusesService {
  //! PRODUCTION VERSION
  // private apiUrl = 'http://localhost:3000/statuses'

  // constructor(private host: HttpClient) { }

  // getStatuses(): Observable<Status[]> {
  //   return this.host.get<Status[]>(this.apiUrl);
  // }

  //? DEMO VERSION
  constructor() {}
  getStatuses(): Status[] {
    return STATUSES;
  }
}
