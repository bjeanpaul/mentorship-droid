import reduce from 'src/reducers/routes/journey';
import * as sync from 'src/actions/sync';
import * as routes from 'src/constants/routes';
import { createStack, createRoute, push } from 'src/navigationHelpers';


describe('src/reducers/journey', () => {
  describe('LOAD_SUCCESS', () => {
    it('should push the journey route', () => {
      expect(reduce(createStack(), sync.loadSuccess({ entities: {} })))
        .toEqual(push(createStack(), createRoute(routes.ROUTE_JOURNEY)));
    });
  });
});
