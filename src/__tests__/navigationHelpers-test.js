import { unary } from 'lodash';

import {
  createRoute,
  createDummyRoute,
  push,
  pushList,
  popCurrent,
  insertAfterCurrent,
  createStack,
  replaceAt,
  remove,
  inject,
} from 'src/navigationHelpers';


describe('navigationHelpers', () => {
  describe('createRoute', () => {
    it('should create a route', () => {
      expect(createRoute('FOO', { bar: 23 })).toEqual({
        key: 'FOO',
        context: { bar: 23 },
      });
    });
  });

  describe('createDummyRoute', () => {
    it('should create a dummy route', () => {
      const { key, context } = createDummyRoute();
      expect(key).toMatch(/DUMMY_ROUTE_\d/);
      expect(context).toEqual({});
    });
  });

  describe('insertAfterCurrent', () => {
    it('should insert the given route after the current index', () => {
      expect(insertAfterCurrent({
        routes: ['A', 'B', 'D', 'E'].map(unary(createRoute)),
        index: 1,
      }, createRoute('C'))).toEqual({
        routes: ['A', 'B', 'C', 'D', 'E'].map(unary(createRoute)),
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
        routes: ['A', 'B'].map(unary(createRoute)),
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

  describe('replaceAt', () => {
    it('should replace routes using the given key and new route', () => {
      const stack = {
        routes: [createRoute('A'), createRoute('B')],
        index: 1,
      };

      expect(replaceAt(stack, 'A', createRoute('C'))).toEqual({
        routes: ['C', 'B'].map(unary(createRoute)),
        index: 0,
      });
    });

    it('should be a no-op if the route is already on the stack', () => {
      const stack = {
        routes: [createRoute('A'), createRoute('B')],
        index: 1,
      };

      expect(replaceAt(stack, 'B', createRoute('A'))).toEqual({
        routes: ['A', 'B'].map(unary(createRoute)),
        index: 1,
      });
    });
  });

  describe('pushList', () => {
    it('should push the given routes onto the stack', () => {
      expect(pushList({
        routes: [createRoute('A')],
        index: 0,
      }, ['B', 'C'].map(unary(createRoute)))).toEqual({
        routes: ['A', 'B', 'C'].map(unary(createRoute)),
        index: 1,
      });
    });

    it('should filter out routes already on the stack', () => {
      expect(pushList({
        routes: [createRoute('A')],
        index: 0,
      }, ['B', 'A', 'C'].map(unary(createRoute)))).toEqual({
        routes: ['A', 'B', 'C'].map(unary(createRoute)),
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
        routes: ['A', 'B', 'C'].map(unary(createRoute)),
        index: 1,
      })).toEqual({
        routes: ['A', 'C'].map(unary(createRoute)),
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

  describe('createStack', () => {
    it('should create an empty stack', () => {
      expect(createStack()).toEqual({
        index: 0,
        routes: [],
      });
    });

    it('should allow initial routes to be given', () => {
      expect(createStack([
        createRoute('FOO'),
        createRoute('BAR'),
      ])).toEqual({
        index: 1,
        routes: [
          createRoute('FOO'),
          createRoute('BAR'),
        ],
      });
    });
  });

  describe('remove', () => {
    it('should remove the route if it exists', () => {
      const stack = createStack([
        createRoute('FOO'),
        createRoute('BAR'),
        createRoute('BAZ'),
      ]);

      expect(remove(stack, 'BAR')).toEqual({
        index: 2,
        routes: [
          createDummyRoute(createDummyRoute.index),
          createRoute('FOO'),
          createRoute('BAZ'),
        ],
      });
    });

    it('should simply return the stack if the route does not exist', () => {
      expect(remove(createStack([createRoute('FOO')]), 'BAR'))
        .toEqual(createStack([createRoute('FOO')]));
    });
  });

  describe('inject', () => {
    it('should inject the given context for the matching route in the stack', () => {
      const stack = createStack([
        createRoute('FOO', {
          baz: 21,
          quux: 23,
        }),
        createRoute('BAR'),
      ]);

      expect(inject(stack, 'FOO', {
        baz: 22,
        corge: 20,
      })).toEqual(createStack([
        createRoute('FOO', {
          baz: 22,
          quux: 23,
          corge: 20,
        }),
        createRoute('BAR'),
      ]));
    });
  });
});
