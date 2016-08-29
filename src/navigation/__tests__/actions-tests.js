import { pushRoute, popRoute } from 'src/navigation/actions';
import * as constants from 'src/constants/navigation';

describe('navigation/actions', () => {
  it('should create action for pushing a route ', () => {
    expect(pushRoute('i.am.a.test.route')).toEqual({
      type: constants.NAVIGATION_PUSH,
      payload: {
        key: 'i.am.a.test.route',
      },
    });
  });

  it('should create action for popping a route', () => {
    expect(popRoute()).toEqual({
      type: constants.NAVIGATION_POP,
    });
  });
});
