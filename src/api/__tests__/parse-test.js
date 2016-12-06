import { makeGradient } from 'src/helpers';
import { fakeCategory, fakeActivity } from 'app/scripts/helpers';
import colors from 'src/constants/colors';
import * as constants from 'src/constants/messages';
import config from 'src/config';

import {
  parseResults,
  parseCategories,
  parseActivities,
  parseCategory,
  parseActivity,
  parseSendMessageResult,
} from 'src/api/parse';

const { API_BASE_URL } = config;


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

      const [{
        color: resColor1,
      }, {
        color: resColor2,
      }, {
        color: resColor3,
      }] = parseCategories([
        { color: '' },
        { color: '#cc33cc' },
        { color: '' },
      ].map(fakeCategory));

      expect(resColor1).toEqual(color1);
      expect(resColor2).toEqual('#cc33cc');
      expect(resColor3).toEqual(color3);
    });

    it('should parse each category', () => {
      expect(parseCategories([fakeCategory()]))
        .toEqual([parseCategory(fakeCategory())]);
    });
  });

  describe('parseActivities', () => {
    it('should parse each activity', () => {
      expect(parseActivities([fakeActivity()]))
        .toEqual([parseActivity(fakeActivity())]);
    });
  });

  describe('parseCategory', () => {
    it('should prepend the base api url to the image url', () => {
      const { image } = parseCategory(fakeCategory({ image: '/foo.jpg' }));
      expect(image).toEqual(`${API_BASE_URL}/foo.jpg`);
    });

    it('should not parse the image url if it is falsy', () => {
      const { image } = parseCategory(fakeCategory({ image: null }));
      expect(image).toEqual(null);
    });
  });

  describe('parseActivity', () => {
    it('should prepend the base api url to the poster url', () => {
      const { poster } = parseActivity(fakeActivity({ poster: '/foo.jpg' }));
      expect(poster).toEqual(`${API_BASE_URL}/foo.jpg`);
    });

    it('should prepend the base api url to the icon url', () => {
      const { icon } = parseActivity(fakeActivity({ icon: '/foo.jpg' }));
      expect(icon).toEqual(`${API_BASE_URL}/foo.jpg`);
    });

    it('should not parse the poster url if it is falsy', () => {
      const { poster } = parseActivity(fakeActivity({ poster: null }));
      expect(poster).toEqual(null);
    });

    it('should not parse the icon url if it is falsy', () => {
      const { icon } = parseActivity(fakeActivity({ icon: null }));
      expect(icon).toEqual(null);
    });
  });

  describe('parseSendMessageResult', () => {
    it('should assign the pending message id', () => {
      const msg = {
        id: 21,
        timeSent: '2016-11-30T09:43:20.311Z',
        direction: constants.MESSAGE_DIRECTION_OUTBOUND,
        content: 'foo',
        otherField: 'bar',
      };

      expect(parseSendMessageResult(msg))
        .toEqual({
          id: 21,
          timestamp: '2016-11-30T09:43:20.311Z',
          direction: constants.MESSAGE_DIRECTION_OUTBOUND,
          status: constants.MESSAGE_STATUS_SENT,
          content: 'foo',
          details: {
            otherField: 'bar',
          },
        });
    });
  });
});
