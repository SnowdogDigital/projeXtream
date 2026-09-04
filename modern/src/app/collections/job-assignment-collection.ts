export interface JobAssignment {
  id: number;
  jobId: number;
  assigneeId: number;
  assignedDate: string;
  acceptanceDate: string | null;
}

export const JOB_ASSIGNMENTS: JobAssignment[] = [
  {
    id: 1,
    jobId: 1,
    assigneeId: 2,
    assignedDate: '2026-09-01',
    acceptanceDate: '2026-09-01',
  },
  {
    id: 2,
    jobId: 2,
    assigneeId: 5,
    assignedDate: '2026-09-02',
    acceptanceDate: '2026-09-03',
  },
  {
    id: 3,
    jobId: 3,
    assigneeId: 3,
    assignedDate: '2026-09-03',
    acceptanceDate: null,
  },
];
