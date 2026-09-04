import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { STATUSES } from '../../collections/statuses-collection';
import { SUB_STATUS } from '../../collections/sub-statuses-collection';

@Component({
  selector: 'app-job-details',
  imports: [],
  templateUrl: './job-details.html',
  styleUrl: './job-details.scss',
})
export class JobDetails {
  private readonly route = inject(ActivatedRoute);

  protected readonly jobId =
    this.route.snapshot.paramMap.get('jobId');

    protected readonly statuses = STATUSES;
protected readonly subStatuses = SUB_STATUS;

protected readonly selectedStatusId = signal<number>(6);
protected readonly selectedSubStatusId = signal<number | null>(1);

protected readonly availableSubStatuses = computed(() => {
  return this.subStatuses.filter(
    subStatus => subStatus.parent === this.selectedStatusId()
  );
});

protected onStatusChange(event: Event): void {
  const select = event.target as HTMLSelectElement;
  const statusId = Number(select.value);

  this.selectedStatusId.set(statusId);

  // A new status invalidates the previous sub-status.
  this.selectedSubStatusId.set(null);
}

protected onSubStatusChange(event: Event): void {
  const select = event.target as HTMLSelectElement;

  this.selectedSubStatusId.set(
    select.value ? Number(select.value) : null
  );
}


  protected readonly customer = {
    name: 'Northstar Communications',
    order: 'ORD-45821',
    poNumber: 'PO-104839',
    siteAddress: '1250 Edwin Miller Blvd, Martinsburg, WV 25404',
  };

  protected readonly job = {
    sow: 'Install and test fiber distribution infrastructure for assigned service area.',
    forecastStartDate: 'Sep 8, 2026',
    actualStartDate: 'Sep 9, 2026',
    forecastCompletionDate: 'Sep 18, 2026',
    actualCompletionDate: '—',
  };

  protected readonly assignment = {
    assigneeName: 'Field Team 2',
    assignedDate: 'Sep 5, 2026',
    acceptanceDate: 'Sep 5, 2026',
  };

  protected get compiledJobInfo(): string {
    return `${this.jobId?.toUpperCase()} || ${this.customer.order} - ${this.customer.siteAddress} ; ${this.customer.name}`;
  }

  protected readonly copyConfirmationVisible = signal(false);

protected async copyCompiledJobInfo(): Promise<void> {
  await navigator.clipboard.writeText(this.compiledJobInfo);

  this.copyConfirmationVisible.set(true);

  setTimeout(() => {
    this.copyConfirmationVisible.set(false);
  }, 2000);
}
}