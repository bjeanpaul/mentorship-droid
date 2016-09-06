import reduce from 'src/reducers/routes/journey';
import * as sync from 'src/actions/sync';
import * as routes from 'src/constants/routes';
import { createStack, createRoute, push, popCurrent } from 'src/navigationHelpers';


describe('src/reducers/journey', () => {
  describe('LOAD_REQUEST', () => {
    it('should push the loading route', () => {
      expect(reduce(createStack(), sync.loadRequest()))
        .toEqual(push(createStack(), createRoute(routes.ROUTE_LOADING)));
    });
  });

  describe('LOAD_SUCCESS', () => {
    it('should pop the current route', () => {
      expect(reduce(createStack(), sync.loadSuccess({ entities: {} })))
        .toEqual(popCurrent(push(createStack(), createRoute(routes.ROUTE_JOURNEY))));
    });
  });
});
