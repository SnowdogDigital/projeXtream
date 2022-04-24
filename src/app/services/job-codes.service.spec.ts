import { TestBed } from '@angular/core/testing';

import { JobCodesService } from './job-codes.service';

describe('JobCodesService', () => {
  let service: JobCodesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobCodesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
