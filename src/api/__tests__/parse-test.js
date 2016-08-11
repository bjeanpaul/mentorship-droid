jest.unmock('src/api/parse');

import { parseResults } from 'src/api/parse';


describe('api/parse', () => {
  describe('parseResults', () => {
    it('should parse results data', () => {
      expect(parseResults({ results: [{ foo: 23 }] })).toEqual([{ foo: 23 }]);
    });
  });
});
