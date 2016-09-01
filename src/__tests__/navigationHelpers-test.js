import {
  createRoute,
  push,
  pushList,
  popCurrent,
  insertAfterCurrent,
} from 'src/navigationHelpers';


describe('navigationHelpers', () => {
  describe('createRoute', () => {
    it('should create a route', () => {
      expect(createRoute('FOO')).toEqual({ key: 'FOO' });
    });
  });

  describe('insertAfterCurrent', () => {
    it('should insert the given route after the current index', () => {
      expect(insertAfterCurrent({
        routes: ['A', 'B', 'D', 'E'].map(createRoute),
        index: 1,
      }, createRoute('C'))).toEqual({
        routes: ['A', 'B', 'C', 'D', 'E'].map(createRoute),
        index: 2,
      });
    });

    it('should be a no-op if the given route is already in the stack', () => {
      expect(insertAfterCurrent({
        routes: ['A', 'B', 'C', 'D', 'E'].map(createRoute),
        index: 1,
      }, createRoute('C'))).toEqual({
        routes: ['A', 'B', 'C', 'D', 'E'].map(createRoute),
        index: 1,
      });
    });
  });

  describe('push', () => {
    it('should push the given route onto the stack', () => {
      expect(push({
        routes: [createRoute('A')],
        index: 1,
      }, createRoute('B'))).toEqual({
        routes: ['A', 'B'].map(createRoute),
        index: 1,
      });
    });

    it('should be a no-op if the route is already on the stack', () => {
      expect(push({
        routes: [createRoute('A')],
        index: 1,
      }, createRoute('A'))).toEqual({
        routes: [createRoute('A')],
        index: 1,
      });
    });
  });

  describe('pushList', () => {
    it('should push the given routes onto the stack', () => {
      expect(pushList({
        routes: [createRoute('A')],
        index: 0,
      }, ['B', 'C'].map(createRoute))).toEqual({
        routes: ['A', 'B', 'C'].map(createRoute),
        index: 1,
      });
    });

    it('should filter out routes already on the stack', () => {
      expect(pushList({
        routes: [createRoute('A')],
        index: 0,
      }, ['B', 'A', 'C'].map(createRoute))).toEqual({
        routes: ['A', 'B', 'C'].map(createRoute),
        index: 1,
      });
    });

    it('should be a no-op for empty lists', () => {
      expect(pushList({
        routes: [createRoute('A')],
        index: 0,
      }, [])).toEqual({
        routes: [createRoute('A')],
        index: 0,
      });
    });
  });

  describe('popCurrent', () => {
    it('should pop the current route off the stack', () => {
      expect(popCurrent({
        routes: ['A', 'B', 'C'].map(createRoute),
        index: 1,
      })).toEqual({
        routes: ['A', 'C'].map(createRoute),
        index: 0,
      });
    });

    it('should clamp the index at 0', () => {
      expect(popCurrent({
        routes: [],
        index: 0,
      })).toEqual({
        routes: [],
        index: 0,
      });
    });
  });
});
