jest.mock('src/api/request');

import { identity, fromPairs } from 'lodash';
import { arrayOf } from 'normalizr';
import { fakeAuth, fakeProfile } from 'app/scripts/helpers';
import request, { imageData } from 'src/api/request';
import { Profile } from 'src/api/schemas';
import { parseProfile, parseProfileListResults } from 'src/api/parse';

import {
  listProfiles,
  getProfile,
  updateProfile,
  removeProfile,
  updateProfilePicture,
  setupProfile,
  profileIsComplete,
  REQUIRED_PROFILE_FIELDS,
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
        parse: parseProfileListResults,
        auth: fakeAuth(),
        params: { foo: 23 },
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
        parse: parseProfile,
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
        schema: Profile,
        parse: parseProfile,
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

  describe('updateProfilePicture', () => {
    it('should construct a request for updateing a profile image', () => {
      expect(updateProfilePicture(1, '/foo.png', {
        email: 'a@b.org',
        password: '1337',
      }))
      .toEqual({
        url: '/profile/1/image/',
        method: 'PUT',
        data: { path: '/foo.png' },
        auth: {
          email: 'a@b.org',
          password: '1337',
        },
      });
    });
  });

  describe('setupProfile', () => {
    it('should update the profile picture', async () => {
      const auth = fakeAuth();

      const profile = fakeProfile({
        profilePictureUploadPath: 'content://foo.png',
      });

      await setupProfile(21, profile, auth);

      expect(request.mock.calls.slice()).toEqual(jasmine.arrayContaining([[
        updateProfilePicture(21, 'content://foo.png', auth),
      ]]));
    });

    it('should update the profile', async () => {
      const fields = fromPairs(REQUIRED_PROFILE_FIELDS.map(key => [key, key]));
      const auth = fakeAuth();
      const profile = fakeProfile(fields);

      await setupProfile(21, profile, auth);

      expect(request.mock.calls.slice()).toEqual(jasmine.arrayContaining([[
        updateProfile(21, fields, auth),
      ]]));
    });
  });

  describe('profileIsComplete', () => {
    it('should return true if required fields are filled-in', () => {
      const profile = fromPairs(REQUIRED_PROFILE_FIELDS.map(key => [key, key]));
      expect(profileIsComplete(profile)).toBe(true);
    });

    it('should return false if required fields are empty', () => {
      const profile = fromPairs(REQUIRED_PROFILE_FIELDS.map(key => [key, key]));

      expect(profileIsComplete({
        ...profile,
        jobTitle: '',
      })).toBe(false);

      expect(profileIsComplete({
        ...profile,
        jobTitle: void 0,
      })).toBe(false);

      expect(profileIsComplete({
        ...profile,
        jobTitle: null,
      })).toBe(false);
    });
  });
});
