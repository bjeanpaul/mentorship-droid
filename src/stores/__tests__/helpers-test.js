import { merge } from 'lodash';
import { getContext } from 'src/stores/helpers';


describe('helpers', () => {
  const createState = (overrides = {}) => merge({}, {
    auth: {
      profileId: 23,
      auth: {
        email: 'a@b.org',
        password: '1337',
      },
    },
    entities: {
      profiles: {
        23: { id: 23 },
      },
    },
  }, overrides);

  describe('getContext', () => {
    it('should get auth details', () => {
      expect(getContext(createState({
        auth: {
          auth: {
            email: 'a@b.org',
            password: '1337',
          },
        },
      }))).toEqual(jasmine.objectContaining({
        auth: {
          email: 'a@b.org',
          password: '1337',
        },
      }));
    });

    it('should get profile details', () => {
      expect(getContext(createState({
        auth: {
          profileId: 23,
        },
        entities: {
          profiles: {
            23: { id: 23 },
          },
        }
      }))).toEqual(jasmine.objectContaining({
        profile: { id: 23 },
      }));
    });
  });
});
