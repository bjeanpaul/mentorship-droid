import { noop, fromPairs, toPairs, values } from 'lodash';
import React from 'react';
import { View } from 'react-native';

import Navigator from 'src/views/Navigator';
import { uidEquals } from 'app/scripts/helpers';
import { NAV_TAB_ROUTES } from 'src/constants/routes';
import { NAV_TAB_JOURNEY, NAV_TAB_ACTIVITIES } from 'src/constants/navigation';


describe('Navigator', () => {
  const defineRoute = route => {
    const Route = () => <View route={route} />;
    return Route;
  };

  const defineRoutes = () => {
    const routes = values(NAV_TAB_ROUTES)
      .map(route => [route, defineRoute(route)]);

    return fromPairs(routes);
  };

  const createComponent = (props = {}) => (
    <Navigator
      routes={defineRoutes()}
      activeTab={NAV_TAB_ACTIVITIES}
      onTabPress={noop}
      {...props}
    />);

  it('should render the currently active tab', () => {
    for (const [tab, route] of toPairs(NAV_TAB_ROUTES)) {
      const el = shallow(createComponent({ activeTab: tab }));

      const actualRoute = el
        .find('Route')
        .shallow()
        .find('View')
        .prop('route');

      expect(actualRoute).toEqual(route);
    }
  });

  it('should call onTabPress when a tab is pressed', () => {
    const onTabPress = jest.fn();

    shallow(createComponent({
      onTabPress,
      activeTab: NAV_TAB_JOURNEY,
    }))
    .find('NavTabBar')
    .shallow()
    .findWhere(uidEquals(NAV_TAB_ACTIVITIES))
    .shallow()
    .simulate('press');

    expect(onTabPress.mock.calls).toEqual([
      [NAV_TAB_ACTIVITIES],
    ]);

    shallow(createComponent({
      onTabPress,
      activeTab: NAV_TAB_ACTIVITIES,
    }))
    .find('NavTabBar')
    .shallow()
    .findWhere(uidEquals(NAV_TAB_JOURNEY))
    .shallow()
    .simulate('press');

    expect(onTabPress.mock.calls).toEqual([
      [NAV_TAB_ACTIVITIES],
      [NAV_TAB_JOURNEY],
    ]);
  });
});
