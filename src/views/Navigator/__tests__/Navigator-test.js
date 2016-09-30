import { fromPairs, noop } from 'lodash';
import React from 'react';

import Navigator from 'src/views/Navigator';
import { Text } from 'src/components';
import { uidEquals } from 'app/scripts/helpers';
import { createStack, createRoute } from 'src/navigationHelpers';
import { NAV_TAB_JOURNEY, NAV_TAB_ACTIVITIES } from 'src/constants/navigation';


describe('Navigator', () => {
  const A = () => <Text>A</Text>;
  const B = () => <Text>B</Text>;

  const createComponent = (props = {}) => (
    <Navigator
      routes={{
        A,
        B,
      }}
      activeTab={NAV_TAB_ACTIVITIES}
      navigationStates={fromPairs([
        [NAV_TAB_ACTIVITIES, createStack([createRoute('A')])],
        [NAV_TAB_JOURNEY, createStack([createRoute('B')])],
      ])}
      onTabPress={noop}
      {...props}
    />);

  it('should render the currently active tab', () => {
    expect(render(createComponent({ activeTab: NAV_TAB_JOURNEY })))
      .toMatchSnapshot();

    expect(render(createComponent({ activeTab: NAV_TAB_ACTIVITIES })))
      .toMatchSnapshot();
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
