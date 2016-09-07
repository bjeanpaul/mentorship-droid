import { noop } from 'lodash';
import React from 'react';

import Navigator from 'src/views/Navigator';
import { Text } from 'src/components';
import { NAV_TAB_ACTIVITIES } from 'src/constants/navigation';


describe('Navigator', () => {
  const createComponent = (props = {}) => (
    <Navigator
      activeTab={NAV_TAB_ACTIVITIES}
      onTabPress={noop}
      {...props}
    >
      <Text>Foo</Text>
    </Navigator>);

  it('should display the nav tab bar if there is an active tab', () => {
    const el = render(createComponent({ activeTab: NAV_TAB_ACTIVITIES }));
    expect(el).toMatchSnapshot();
  });

  it('should not display the nav tab bar if there is no active tab', () => {
    const el = render(createComponent({ activeTab: null }));
    expect(el).toMatchSnapshot();
  });
});
