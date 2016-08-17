jest.mock('src/api/request');


import { identity } from 'lodash';
import { arrayOf } from 'normalizr';
import { fakeValue } from 'scripts/helpers';
import request, { imageData } from 'src/api/request';
import { Profile } from 'src/api/schemas';
import { parseResults } from 'src/api/parse';
import { listProfiles, uploadProfileImage } from 'src/api';


describe('api', () => {
  beforeEach(() => {
    imageData.mockImplementation(identity);
    imageData.mockClear();

    request.mockImplementation(identity);
    request.mockClear();
  });

  describe('listProfiles', () => {
    it('should construct a request for listing profiles', () => {
      expect(listProfiles({
        email: 'a@b.org',
        password: '1337',
      }))
      .toEqual({
        url: '/profile',
        schema: arrayOf(Profile),
        params: { email: 'a@b.org' },
        parse: parseResults,
        auth: {
          email: 'a@b.org',
          password: '1337',
        },
      });
    });
  });

  describe('uploadProfileImage', () => {
    it('should construct a request for uploading a profile image', () => {
      expect(uploadProfileImage(1, '/foo.png', {
        email: 'a@b.org',
        password: '1337',
      }))
      .toEqual({
        url: '/profile/1/image/',
        method: 'PUT',
        data: {
          path: '/foo.png',
          name: 'rar.png',
          type: 'image/png',
        },
        auth: {
          email: 'a@b.org',
          password: '1337',
        },
      });
    });
  });
});
