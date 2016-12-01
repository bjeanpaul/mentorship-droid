import { noop, each, values, without } from 'lodash';
import React from 'react';
import { NavTabBar } from 'src/components';
import { uidEquals } from 'app/scripts/helpers';


describe('NavTabBar', () => {
  const createComponent = (props) => (
    <NavTabBar
      activeTab={NavTabBar.tabs[0]}
      onTabPress={noop}
      {...props}
    />
  );

  it('should render', () => {
    expect(render(createComponent())).toMatchSnapshot();
  });

  it('should call `onTabPress` when a tab is pressed for inactive tabs', () => {
    each(NavTabBar.tabs, activeTab => {
      const onTabPress = jest.fn();

      const el = shallow(createComponent({
        activeTab,
        onTabPress,
      }));

      each(NavTabBar.tabs, tab => {
        el.findWhere(uidEquals(tab))
          .shallow()
          .simulate('press');
      });

      const expectedCalls = without(values(NavTabBar.tabs), activeTab).map(v => [v]);
      expect(onTabPress.mock.calls).toEqual(expectedCalls);
    });
  });
});
