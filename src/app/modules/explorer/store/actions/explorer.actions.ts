import { createAction, props } from '@ngrx/store';

export const loadExplorers = createAction(
  '[Explorer] Load Explorers'
);

export const loadExplorersSuccess = createAction(
  '[Explorer] Load Explorers Success',
  props<{ data: any }>()
);

export const loadExplorersFailure = createAction(
  '[Explorer] Load Explorers Failure',
  props<{ error: any }>()
);
