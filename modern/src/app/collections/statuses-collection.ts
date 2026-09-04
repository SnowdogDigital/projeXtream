export interface JobStatus {
  id: number;
  name: string;
}

export const STATUSES: JobStatus[] = [
  {
    id: 1,
    name: 'complete',
  },
  {
    id: 2,
    name: 'cancelled',
  },
  {
    id: 3,
    name: 'permit',
  },
  {
    id: 4,
    name: 'hold',
  },
  {
    id: 5,
    name: 'mdu',
  },
  {
    id: 6,
    name: 'underground',
  },
  {
    id: 7,
    name: 'place',
  },
  {
    id: 8,
    name: 'splice',
  },
  {
    id: 9,
    name: 'drop',
  },
  {
    id: 10,
    name: 'planning',
  },
  {
    id: 11,
    name: 'engineering',
  },
  {
    id: 12,
    name: 'sales',
  },
  {
    id: 13,
    name: 'municipality',
  },
  {
    id: 14,
    name: 'customer',
  },
  {
    id: 15,
    name: 'whiteline',
  },
];
