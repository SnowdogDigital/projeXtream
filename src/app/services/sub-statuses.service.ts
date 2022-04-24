import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { SubStatus } from '../interfaces/SubStatus';
import { SUB_STATUS } from '../collections/sub-statuses-collection';

@Injectable({
  providedIn: 'root'
})
export class SubStatusesService {
  //! PRODUCTION VERSION
  // private apiUrl = 'http://localhost:3000/sub_statuses'

  // constructor(private host: HttpClient) { }

  // getSubStatuses(): Observable<SubStatus[]> {
  //   return this.host.get<SubStatus[]>(this.apiUrl);
  // }

  //? DEMO VERSION
  constructor() {}
  getSubStatuses(): SubStatus[] {
    return SUB_STATUS;
  }
}
