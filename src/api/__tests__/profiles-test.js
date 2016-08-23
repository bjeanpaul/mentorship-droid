jest.mock('src/api/request');


import { identity } from 'lodash';
import { arrayOf } from 'normalizr';
import { fakeAuth } from 'app/scripts/helpers';
import request, { imageData } from 'src/api/request';
import { Profile } from 'src/api/schemas';
import { parseResults } from 'src/api/parse';

import {
  listProfiles,
  createProfile,
  getProfile,
  updateProfile,
  removeProfile,
  updateProfileImage,
} from 'src/api';


describe('api/profiles', () => {
  beforeEach(() => {
    imageData.mockImplementation(identity);
    imageData.mockClear();

    request.mockImplementation(identity);
    request.mockClear();
  });

  describe('listProfiles', () => {
    it('should construct a request for listing profiles', () => {
      expect(listProfiles(fakeAuth(), { foo: 23 })).toEqual({
        url: '/profile/',
        method: 'GET',
        schema: arrayOf(Profile),
        parse: parseResults,
        auth: fakeAuth(),
        params: { foo: 23 },
      });
    });
  });

  describe('createProfile', () => {
    it('should construct a request for creating a profile', () => {
      expect(createProfile({ fake: 'profile' }, fakeAuth())).toEqual({
        url: '/profile/',
        method: 'POST',
        data: { fake: 'profile' },
        auth: fakeAuth(),
      });
    });
  });

  describe('getProfile', () => {
    it('should construct a request for getting a profile', () => {
      expect(getProfile(23, fakeAuth())).toEqual({
        url: '/profile/23/',
        method: 'GET',
        auth: fakeAuth(),
        schema: Profile,
      });
    });
  });

  describe('updateProfile', () => {
    it('should construct a request for updating a profile', () => {
      expect(updateProfile(23, { fake: 'profile' }, fakeAuth())).toEqual({
        url: '/profile/23/',
        method: 'PUT',
        data: { fake: 'profile' },
        auth: fakeAuth(),
      });
    });
  });

  describe('removeProfile', () => {
    it('should construct a request for removing a profile', () => {
      expect(removeProfile(23, fakeAuth())).toEqual({
        url: '/profile/23/',
        method: 'DELETE',
        auth: fakeAuth(),
      });
    });
  });

  describe('updateProfileImage', () => {
    it('should construct a request for updateing a profile image', () => {
      expect(updateProfileImage(1, '/foo.png', {
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
