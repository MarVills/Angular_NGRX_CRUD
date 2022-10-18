import { createAction, props } from '@ngrx/store';

export const loadActions = createAction(
  '[Action] Load Actions'
);

export const loadActionsSuccess = createAction(
  '[Action] Load Actions Success',
  props<{ data: any }>()
);

export const loadActionsFailure = createAction(
  '[Action] Load Actions Failure',
  props<{ error: any }>()
);
