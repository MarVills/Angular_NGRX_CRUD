import { Action, createReducer, on } from '@ngrx/store';
import { Info } from '../../../../Models/info';


export const reducerFeatureKey = 'reducer';

export interface InfoState {
  infos:  Info[];
}

export const initialState: InfoState = {
  infos: []
};

export const reducer = createReducer(
  initialState,

);
