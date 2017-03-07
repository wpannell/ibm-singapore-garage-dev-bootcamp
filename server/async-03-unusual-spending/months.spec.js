import {current, prior} from './months';

describe.only('months test spec ', () => {
  it('returns current month', () => {
    current().should.containDeep('{month: 12, year: 2016}');
  });
  it('returns prior month', () => {
    prior().should.containDeep('{month: 11, year: 2016}');
  });
});
