import { TestBed } from '@angular/core/testing';

import { ReviewGroupsService } from './review-groups.service';

describe('ReviewGroupsService', () => {
  let service: ReviewGroupsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReviewGroupsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
