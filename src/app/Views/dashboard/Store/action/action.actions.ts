import { createAction, props } from '@ngrx/store';
import { Info } from 'src/app/Models/info';

export const loadActions = createAction(
  '[Action] Load Actions'
);

export const addData = createAction(
  'infoReducer',
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
