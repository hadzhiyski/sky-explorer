import * as fromExplorer from './explorer.actions';

describe('loadExplorers', () => {
  it('should return an action', () => {
    expect(fromExplorer.loadExplorers().type).toBe('[Explorer] Load Explorers');
  });
});
