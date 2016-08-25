import React from 'react';
import { noop } from 'lodash';
import CategoryActivityList from 'src/categories/CategoryActivityList';
import { fakeCategory, fakeActivity } from 'app/scripts/helpers';


describe('CategoryActivityList', () => {
  function createComponent(props = {}) {
    return (
      <CategoryActivityList
        onActivityPress={noop}
        category={fakeCategory()}
        activities={[{
          id: 1,
          title: 'Activity 1',
        }, {
          id: 2,
          title: 'Activity 2',
        }].map(fakeActivity)}
        {...props}
      />
    );
  }

  it('should render', () => {
    expect(render(createComponent())).toMatchSnapshot();
  });

  it('should call onActivityPress when a activity is pressed', () => {
    const onActivityPress = jest.fn();
    const el = shallow(createComponent({ onActivityPress }));

    el.findWhere(child => child.prop('activityId') === 1)
      .simulate('press');

    expect(onActivityPress.mock.calls).toEqual([[1]]);

    el.findWhere(child => child.prop('activityId') === 2)
      .simulate('press');

    expect(onActivityPress.mock.calls).toEqual([[1], [2]]);
  });
});
