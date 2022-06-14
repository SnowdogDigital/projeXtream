import { Job } from '../interfaces/Job';

export class DisplayItemAction{
  static readonly type = '[Job] Display Order'
  constructor(public id: number) {}
}

export class UpdateItemAction{
  static readonly type = '[Job] Update Order'
  constructor(public id: number) {}
}