import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { STATUSES } from '../../collections/statuses-collection';
import { SUB_STATUSES } from '../../collections/sub-statuses-collection';
import { JOBS } from '../../collections/jobs-collection';
import { ASSIGNEES } from '../../collections/assignees-collection';
import { JOB_ASSIGNMENTS, JobAssignment } from '../../collections/job-assignment-collection';

@Component({
  selector: 'app-job-details',
  imports: [],
  templateUrl: './job-details.html',
  styleUrl: './job-details.scss',
})
export class JobDetails {
  private readonly route = inject(ActivatedRoute);

  protected readonly jobId = this.route.snapshot.paramMap.get('jobId');
  protected readonly selectedJob = JOBS.find((job) => job.id === Number(this.jobId));
  protected readonly selectedAssignment = JOB_ASSIGNMENTS.find(
    (assignment) => assignment.jobId === Number(this.jobId),
  );

  protected readonly selectedAssignee = ASSIGNEES.find(
    (assignee) => assignee.id === this.selectedAssignment?.assigneeId,
  );

  //* Job Status handler
  protected readonly statuses = STATUSES;
  protected readonly subStatuses = SUB_STATUSES;

  protected readonly selectedStatusId = signal<number | null>(this.selectedJob?.status ?? null);

  protected readonly selectedSubStatusId = signal<number | null>(
    this.selectedJob?.sub_status ?? null,
  );

  protected readonly availableSubStatuses = computed(() => {
    const statusId = this.selectedStatusId();

    if (statusId === null) {
      return [];
    }

    return this.subStatuses.filter((subStatus) => subStatus.parent === statusId);
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

    this.selectedSubStatusId.set(select.value ? Number(select.value) : null);
  }

  protected formatLabel(value: string): string {
    return value
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  //* Job Details
  protected readonly customer = {
    name: this.selectedJob?.customer_name ?? '—',
    order: this.selectedJob?.order_no ?? '—',
    poNumber: this.selectedJob?.po_no ?? '—',
    siteAddress: this.selectedJob ? `${this.selectedJob.address}, ${this.selectedJob.state}` : '—',
  };

  protected readonly job = {
    sow: this.selectedJob?.work_required ?? '—',
    forecastStartDate: this.selectedJob?.eis_date ?? '—',
    actualStartDate: '—',
    forecastCompletionDate: this.selectedJob?.due_date ?? '—',
    actualCompletionDate: '—',
  };

  protected readonly assignment = {
    assigneeName: this.selectedAssignee?.name ?? 'Unassigned',
    assignedDate: this.selectedAssignment?.assignedDate ?? '—',
    acceptanceDate: this.selectedAssignment?.acceptanceDate ?? '—',
  };

  //* Compiled Info handler
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
