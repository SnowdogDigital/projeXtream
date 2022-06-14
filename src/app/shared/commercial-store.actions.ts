export class CommercialOrderUpdate {
  static readonly type =  '[commercial] update order';
  constructor(public payload: string | number) {}
}