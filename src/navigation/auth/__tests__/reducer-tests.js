
import {
  pushAuthRoute,
  popAuthRoute,
} from 'src/navigation/auth/actions';

import * as constants from 'src/navigation/auth/constants';
import authReducer from 'src/navigation/auth/reducer';


describe('navigation/auth/reducer', () => {
  it('should have landing as the first route', () => {
    // eslint-disable-next-line no-undefined
    expect(authReducer(undefined, { type: 'ping?' })).toEqual({
      index: 0,
      routes: [
        { key: constants.AUTH_ROUTE_LANDING },
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

    expect(authReducer(state, pushAuthRoute('Pong!')))
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
    expect(authReducer(state, popAuthRoute()))
    .toEqual({
      index: 0,
      routes: [
        { key: 'Ping?' },
      ],
    });
  });
});
