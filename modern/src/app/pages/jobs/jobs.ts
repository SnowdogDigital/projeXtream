import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { JOBS } from '../../collections/jobs-collection';
import { STATUSES } from '../../collections/statuses-collection';
import { SUB_STATUSES } from '../../collections/sub-statuses-collection';

@Component({
  imports: [RouterLink],
  selector: 'app-jobs',
  styleUrl: './jobs.scss',
  templateUrl: './jobs.html',
})
export class Jobs {
  protected readonly jobs = JOBS;
  protected readonly jobStatuses = STATUSES;
  protected getStatusName(jobStatusId: number): string {
    return this.jobStatuses.find((jobStatus) => jobStatus.id === jobStatusId)?.name ?? 'Unknown';
  }
  protected readonly jobSubStatuses = SUB_STATUSES;
  protected getSubStatusName(jobSubStatusId: number | null): string {
    if (jobSubStatusId === null) {
      return '—';
    }

    return (
      this.jobSubStatuses.find((jobSubStatus) => jobSubStatus.id === jobSubStatusId)?.name ??
      'Unknown'
    );
  }
  protected formatLabel(value: string): string {
    if (value.toLowerCase() === 'mdu') {
      return 'MDU';
    }

    return value
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}
