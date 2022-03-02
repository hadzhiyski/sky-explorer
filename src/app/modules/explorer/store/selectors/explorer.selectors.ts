import { createFeatureSelector } from '@ngrx/store';
import * as fromExplorer from '../reducers/explorer.reducer';
import { IExplorerState } from '../state';

export const selectExplorerState = createFeatureSelector<IExplorerState>(
  fromExplorer.explorerFeatureKey
);
