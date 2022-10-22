import { Action, createReducer, on } from '@ngrx/store';
import { Info } from '../../../../Models/info';
import * as InfoActions from '../action/action.actions';
import { ADD_DATA, REMOVE_DATA } from '../action/action.actions';


export const infoFeatureKey = 'infoReducer';

export interface InfoState {
  infos:  Info[];
}

export const initialState: InfoState = {
  infos: []
};

export const createData = createReducer(
  initialState,
  on(InfoActions.addData,
    (state: InfoState, {data}) => 
    ({
      ...state,
      infos: [...state.infos, data]
    })
    )
);

export const deleteData = createReducer(
  initialState,
  on(InfoActions.deleteSingleCustomerAction,
    (state: InfoState, {data}) => 
    ({
      ...state,
      // infos: [...state.infos, data]
      infos: [...state.infos.splice(1)]
      // infos: state.infos.filter(infos => infos.data !== customerID)
      
    })
    )
);



export function reducer(state: InfoState | undefined, action: Action): any {
  console.log("typeof:",typeof createData(state, action))
  console.log("Action type:", action.type);
  // return createData(state, action);

  switch (action.type) {
    case ADD_DATA:
      // return [...state, (action as AddHero).heroToBeAdded]
      return createData(state, action);
    case REMOVE_DATA:
      return deleteData(state,action)
      // const newState = [...state]
      // newState.splice((action as RemoveHero).indexOfHeroToBeRemoved,1)
      // return newState
    // case INIT:
    //   return initialState
    // default:
    //   throw Error(`The action type "${action.type}" is not implemented`)
  }

  
}

// export function deleteDataReducer(state: InfoState | undefined, action: Action): any {
//   console.log("typeof:",typeof createData(state, action))
//   return deleteData(state, action);
// }



