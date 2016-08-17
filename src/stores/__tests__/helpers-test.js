import { getContext } from 'src/stores/helpers';
import initialState from 'src/stores/initialState';


describe('helpers', () => {
  describe('getContext', () => {
    it('should get auth details', () => {
      expect(getContext({
        ...initialState(),
        auth: {
          email: 'a@b.org',
          password: '1337',
        }
      })).toEqual(jasmine.objectContaining({
        auth: {
          email: 'a@b.org',
          password: '1337',
        }
      }));
    });
  });
});
