import { pushRoute, popRoute } from 'src/actions/navigation';
import * as constants from 'src/constants/navigation';
import reduce from 'src/reducers/navigation';


describe('navigation/reducer', () => {
  it('should have `ROUTE_LANDING` as the first default route', () => {
    expect(reduce(void 0, { type: 'ping?' })).toEqual({
      index: 0,
      routes: [
        { key: constants.ROUTE_LANDING },
      ],
    });
  });

  it('should push new routes onto the stack', () => {
    const state = {
      index: 0,
      routes: [
        { key: 'Ping?' },
      ],
    };

    expect(reduce(state, pushRoute('Pong!')))
    .toEqual({
      index: 1,
      routes: [
        { key: 'Ping?' },
        { key: 'Pong!' },
      ],
    });
  });

  it('should pop routes off the stack', () => {
    const state = {
      index: 1,
      routes: [
        { key: 'Ping?' },
        { key: 'Pong!' },
      ],
    };
    expect(reduce(state, popRoute()))
    .toEqual({
      index: 0,
      routes: [
        { key: 'Ping?' },
      ],
    });
  });
});
