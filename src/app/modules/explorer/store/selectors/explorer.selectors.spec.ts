import * as fromExplorer from '../reducers/explorer.reducer';
import { selectExplorerState } from './explorer.selectors';

describe('Explorer Selectors', () => {
  it('should select the feature state', () => {
    const result = selectExplorerState({
      [fromExplorer.explorerFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
