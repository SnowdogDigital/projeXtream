import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ReviewGroup } from '../interfaces/ReviewGroup';
import { REVIEW_GROUP } from '../collections/review-groups-collection';

@Injectable({
  providedIn: 'root'
})
export class ReviewGroupsService {
  //! PRODUCTION VERSION
  // private apiUrl = 'http://localhost:3000/review_groups'

  // constructor(private host: HttpClient) { }

  // getReviewGroups(): Observable<ReviewGroup[]> {
  // return this.host.get<ReviewGroup[]>(this.apiUrl);
  // }

  //? DEMO VERSION
  constructor() {}
  getReviewGroups(): ReviewGroup[] {
    return REVIEW_GROUP;
  }
}
