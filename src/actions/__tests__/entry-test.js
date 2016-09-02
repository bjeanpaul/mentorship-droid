jest.mock('src/api/profiles');

import { profileIsComplete } from 'src/api';
import { enter, enterNewUser, enterExistingUser } from 'src/actions/entry';
import { capture, fakeContext } from 'app/scripts/helpers';


describe('actions/entry', () => {
  beforeEach(() => {
    profileIsComplete.mockClear();
  });


  describe('enter', () => {
    it('should call enterExistingUser() if a profile is complete', async () => {
      profileIsComplete.mockReturnValue(true);
      expect(await capture(enter(), fakeContext())).toEqual([enterExistingUser()]);
    });

    it('should call enterNewUser() if a profile is not complete', async () => {
      profileIsComplete.mockReturnValue(true);
      expect(await capture(enter(), fakeContext())).toEqual([enterNewUser()]);
    });
  });
});
