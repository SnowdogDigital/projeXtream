export interface JobSubStatus {
  id: number;
  name: string;
  parent: number;
}

export const SUB_STATUSES: JobSubStatus[] = [
  {
    id: 1,
    name: 'bore',
    parent: 6,
  },
  {
    id: 2,
    name: 'trench',
    parent: 6,
  },
  {
    id: 3,
    name: 'restoration',
    parent: 6,
  },
  {
    id: 4,
    name: 'pending',
    parent: 3,
  },
  {
    id: 5,
    name: 'revision',
    parent: 3,
  },
  {
    id: 6,
    name: 'related project',
    parent: 4,
  },
  {
    id: 7,
    name: 'weather',
    parent: 4,
  },
  {
    id: 8,
    name: 'material',
    parent: 4,
  },
  {
    id: 9,
    name: 'path issue',
    parent: 4,
  },
  {
    id: 10,
    name: 'new path',
    parent: 14,
  },
  {
    id: 11,
    name: 'access issue',
    parent: 14,
  },
  {
    id: 12,
    name: 'cost review',
    parent: 14,
  },
  {
    id: 13,
    name: 'redesign',
    parent: 11,
  },
  {
    id: 14,
    name: 'cost review',
    parent: 11,
  },
  {
    id: 15,
    name: 'fielding',
    parent: 11,
  },
  {
    id: 16,
    name: 'cost review',
    parent: 10,
  },
  {
    id: 17,
    name: 'copper',
    parent: 8,
  },
  {
    id: 18,
    name: 'fiber',
    parent: 8,
  },
  {
    id: 19,
    name: 'testing',
    parent: 8,
  },
  {
    id: 20,
    name: 'make ready',
    parent: 7,
  },
  {
    id: 21,
    name: 'strand',
    parent: 7,
  },
  {
    id: 22,
    name: 'fiber',
    parent: 7,
  },
  {
    id: 23,
    name: 'wreckout',
    parent: 7,
  },
];
