import { createAction, props } from '@ngrx/store';
import { Info } from 'src/app/Models/info';

export const ADD_DATA = "ADD_DATA";
export const REMOVE_DATA = "REMOVE_DATA";

export const loadActions = createAction(
  '[Action] Load Actions'
);

export const addData = createAction(
  'ADD_DATA',
  (data: Info) => ({data})
);

// export const loadActionsSuccess = createAction(
//   '[Action] Load Actions Success',
//   props<{ data: any }>()
// );

// export const loadActionsFailure = createAction(
//   '[Action] Load Actions Failure',
//   props<{ error: any }>()
// );

export const deleteSingleCustomerAction = createAction(
  "REMOVE_DATA",
  (data: Info) => ({data})
 );
 export const deleteSingleCustomerActionSuccess = createAction(
  "delete"
 );

