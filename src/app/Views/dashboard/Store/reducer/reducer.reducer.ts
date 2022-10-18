import { Action, createReducer, on } from '@ngrx/store';
import { Info } from '../../../../Models/info';
import * as InfoActions from '../action/action.actions';


export const infoFeatureKey = 'infoReducer';

export interface InfoState {
  infos:  Info[];
}

export const initialState: InfoState = {
  infos: []
};

export const infoReducer = createReducer(
  initialState,
  on(InfoActions.addData,
    (state: InfoState, {data}) => 
    ({
      ...state,
      infos: [...state.infos, data]
    })
    )
);

export function reducer(state: InfoState | undefined, action: Action): any {
  console.log("typeof:",typeof infoReducer(state, action))
  return infoReducer(state, action);
}
