import { parseResults, parseCategories } from 'src/api/parse';
import { makeGradient } from 'src/helpers';
import { fakeCategory } from 'app/scripts/helpers';
import colors from 'src/constants/colors';


describe('api/parse', () => {
  describe('parseResults', () => {
    it('should parse results data', () => {
      expect(parseResults({ results: [{ foo: 23 }] })).toEqual([{ foo: 23 }]);
    });
  });

  describe('parseCategories', () => {
    it('should provide fallback colours', () => {
      const [color1, _color2, color3] = makeGradient(
        colors.CATEGORY_LIST_GRADIENT_START,
        colors.CATEGORY_LIST_GRADIENT_END,
        3);

      expect(parseCategories([
        fakeCategory({ color: '' }),
        fakeCategory({ color: '#cc33cc' }),
        fakeCategory({ color: '' }),
      ])).toEqual([
        fakeCategory({ color: color1 }),
        fakeCategory({ color: '#cc33cc' }),
        fakeCategory({ color: color3 }),
      ]);
    });
  });
});
