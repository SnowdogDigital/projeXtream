import { TestBed } from '@angular/core/testing';

import { SubStatusesService } from './sub-statuses.service';

describe('SubStatusesService', () => {
  let service: SubStatusesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubStatusesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
