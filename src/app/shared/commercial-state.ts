import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { Job } from "../interfaces/Job";
import { DisplayItemAction, UpdateItemAction } from './commercial-actions';

export interface CommercialStateModel {
  items: Job[];
}

@State<CommercialStateModel>({
  name: 'commercial'
})

@Injectable()
export class CommercialState {
  @Action(DisplayItemAction)
  displayItem(ctx: StateContext<CommercialStateModel>, action: DisplayItemAction) {
    const { id } = action;

    if(!id) {
      return;
    }

    const state = ctx.getState();

    ctx.setState({
      ...state,
      items: [...state.items]
    });

    console.log(ctx.getState());
  }

}

