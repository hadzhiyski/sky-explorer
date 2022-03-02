import { createReducer, on } from '@ngrx/store';
import * as ExplorerActions from '../actions/explorer.actions';
import { IExplorerState } from '../state';

export const explorerFeatureKey = 'explorer';

export const initialState: IExplorerState = {};

export const reducer = createReducer(
  initialState,

  on(ExplorerActions.loadExplorers, (state) => state),
  on(ExplorerActions.loadExplorersSuccess, (state, action) => state),
  on(ExplorerActions.loadExplorersFailure, (state, action) => state)
);
