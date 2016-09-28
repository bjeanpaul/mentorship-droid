import { noop } from 'lodash';
import React from 'react';
import Category, { TAB_ACTIVITIES, TAB_ABOUT } from 'src/views/Category';
import { uidEquals, fakeCategory, fakeActivity } from 'app/scripts/helpers';


describe('Category', () => {
  function createComponent(props = {}) {
    return (
      <Category
        category={fakeCategory({
          title: 'Level',
          color: '#97c13c',
        })}
        activities={[fakeActivity()]}
        onActivityPress={noop}
        onBackPress={noop}
        {...props}
      />
    );
  }

  it('should render', () => {
    const el = render(createComponent());
    expect(el).toMatchSnapshot();
  });

  it('should render the currently active tab', () => {
    let el;
    el = render(createComponent({ initialPropType: TAB_ABOUT }));
    expect(el).toMatchSnapshot();

    el = render(createComponent({ initialPropType: TAB_ACTIVITIES }));
    expect(el).toMatchSnapshot();
  });

  it('should call onBackPress when the back button is pressed', () => {
    const onBackPress = jest.fn();
    const el = shallow(createComponent({ onBackPress }));

    el.findWhere(uidEquals('back'))
      .simulate('press');

    expect(onBackPress.mock.calls).toEqual([[]]);
  });
  it('should call onTabChange when a tab is pressed', () => {
    const el = shallow(createComponent());
    const onTabChange = jest.fn();
    el.instance().onTabChange = onTabChange;

    el.findWhere(node => node.prop('tabId') === TAB_ABOUT)
      .simulate('press');

    expect(onTabChange.mock.calls).toEqual([
      [TAB_ABOUT],
    ]);

    el.findWhere(node => node.prop('tabId') === TAB_ACTIVITIES)
      .simulate('press');

    expect(onTabChange.mock.calls).toEqual([
      [TAB_ABOUT],
      [TAB_ACTIVITIES],
    ]);
  });
});
