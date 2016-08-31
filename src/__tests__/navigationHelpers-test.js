import { createRoute, insert } from 'src/navigationHelpers';


describe('navigationHelpers', () => {
  describe('createRoute', () => {
    it('should create a route', () => {
      expect(createRoute('FOO')).toEqual({ key: 'FOO' });
    });
  });

  describe('insert', () => {
    it('should insert the given route at the current index', () => {
      expect(insert({
        routes: ['A', 'B', 'D', 'E'].map(createRoute),
        index: 1,
      }, createRoute('C'))).toEqual({
        routes: ['A', 'B', 'C', 'D', 'E'].map(createRoute),
        index: 2,
      });
    });
  });
});
