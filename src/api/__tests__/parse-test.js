import { fromPairs } from 'lodash';
import { makeGradient } from 'src/helpers';
import { fakeCategory, fakeActivity, fakeProfile } from 'app/scripts/helpers';
import colors from 'src/constants/colors';
import { imageUrl } from 'src/api';
import { MESSAGE_TYPE_COMPLETE } from 'src/constants/messages';
import { REQUIRED_PROFILE_FIELDS } from 'src/constants/profile';

import {
  addOrdinals,
  parseResults,
  parseCategories,
  parseCategory,
  parseActivity,
  parseMessage,
  parseProfile,
} from 'src/api/parse';


describe('api/parse', () => {
  describe('addOrdinals', () => {
    it('should add indices to each datum as an ordinal property', () => {
      const res = addOrdinals([{
        v: 2,
      }, {
        v: 3,
      }, {
        v: 4,
      }]);

      expect(res).toEqual([{
        v: 2,
        ordinal: 0,
      }, {
        v: 3,
        ordinal: 1,
      }, {
        v: 4,
        ordinal: 2,
      }]);
    });

    it('should not overwrite existing ordinal properties', () => {
      const res = addOrdinals([{
        v: 2,
      }, {
        v: 3,
        ordinal: 23,
      }, {
        v: 4,
      }]);

      expect(res).toEqual([{
        v: 2,
        ordinal: 0,
      }, {
        v: 3,
        ordinal: 23,
      }, {
        v: 4,
        ordinal: 2,
      }]);
    });
  });

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

  describe('parseCategory', () => {
    it('should prepend the base api url to the image url', () => {
      const { image } = parseCategory(fakeCategory({ image: '/foo.jpg' }));
      expect(image).toEqual(imageUrl('/foo.jpg'));
    });
  });

  describe('parseActivity', () => {
    it('should prepend the base api url to the poster url', () => {
      const { poster } = parseActivity(fakeActivity({ poster: '/foo.jpg' }));
      expect(poster).toEqual(imageUrl('/foo.jpg'));
    });

    it('should prepend the base api url to the icon url', () => {
      const { icon } = parseActivity(fakeActivity({ icon: '/foo.jpg' }));
      expect(icon).toEqual(imageUrl('/foo.jpg'));
    });
  });

  describe('parseProfile', () => {
    it('should add the profile image', () => {
      const profile = fakeProfile({
        profilePic: '/foo.jpg',
      });

      expect(parseProfile(profile)).toEqual(jasmine.objectContaining({
        profilePic: imageUrl('/foo.jpg'),
      }));
    });

    it('should initialise required fields to empty strings', () => {
      const fieldNames = REQUIRED_PROFILE_FIELDS.filter(k => k !== 'profilePic');
      const profile = fakeProfile(fromPairs(fieldNames.map(name => [name, null])));
      const initialised = fromPairs(fieldNames.map(name => [name, '']));
      expect(parseProfile(profile)).toEqual(jasmine.objectContaining(initialised));
    });
  });

  describe('parseMessage', () => {
    it('should assign the pending message id', () => {
      const msg = {
        id: 21,
        timeSent: '2016-11-30T09:43:20.311Z',
        content: 'foo',
        otherField: 'bar',
      };

      expect(parseMessage(msg))
        .toEqual({
          id: 21,
          type: MESSAGE_TYPE_COMPLETE,
          timestamp: '2016-11-30T09:43:20.311Z',
          content: 'foo',
          details: {
            otherField: 'bar',
          },
        });
    });
  });

  describe('parseProfile', () => {
    it('should add the profile image', () => {
      const profile = fakeProfile({
        profilePic: '/foo.jpg',
      });

      expect(parseProfile(profile)).toEqual(jasmine.objectContaining({
        profilePic: imageUrl('/foo.jpg'),
      }));
    });
  });
});
