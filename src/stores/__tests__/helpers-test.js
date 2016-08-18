import { getContext } from 'src/stores/helpers';


describe('helpers', () => {
  describe('getContext', () => {
    it('should get auth details', () => {
      expect(getContext({
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
