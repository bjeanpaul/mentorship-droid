import { popOnboardingRoute, pushOnboardingRoute } from '../actions';
import * as constants from '../constants';
import reducer from '../reducer';


describe('navigation/onboarding/reducer', () => {
  it('should have hello as the first route', () => {
    expect(reducer(void 0, { type: 'ping?' })).toEqual({
      index: 0,
      routes: [
        { key: constants.ONBOARDING_ROUTE_HELLO },
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

    expect(reducer(state, pushOnboardingRoute('Pong!')))
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
    expect(reducer(state, popOnboardingRoute()))
    .toEqual({
      index: 0,
      routes: [
        { key: 'Ping?' },
      ],
    });
  });
});
