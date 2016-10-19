import tick from 'src/actions/tick';
import * as constants from 'src/constants/tick';

jest.useFakeTimers();


describe('actions/tick', () => {
  it('should dispatch a tick action each interval', () => {
    const dispatch = jest.fn();
    tick()(dispatch);

    expect(dispatch.mock.calls).toEqual([]);

    jest.runTimersToTime(constants.TICK_INTERVAL);

    expect(dispatch.mock.calls).toEqual([[{
      type: constants.TICK,
    }]]);

    jest.runTimersToTime(constants.TICK_INTERVAL);

    expect(dispatch.mock.calls).toEqual([[{
      type: constants.TICK,
    }], [{
      type: constants.TICK,
    }]]);
  });
});
