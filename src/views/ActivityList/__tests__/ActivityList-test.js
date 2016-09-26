import { noop } from 'lodash';
import React from 'react';
import ActivityList from 'src/views/ActivityList';
import { uidEquals, fakeCategory, fakeActivity } from 'app/scripts/helpers';


describe('ActivityList', () => {
  const createComponent = (props = {}) => (
    <ActivityList
      category={fakeCategory({
        title: 'Level',
        color: '#97c13c',
      })}
      activities={[fakeActivity()]}
      onBackPress={noop}
      onActivityPress={noop}
      {...props}
    />
  );

  it('should render', () => {
    const el = render(createComponent());
    expect(el).toMatchSnapshot();
  });

  it('should call onBackPress when the back button is pressed', () => {
    const onBackPress = jest.fn();
    const el = shallow(createComponent({ onBackPress }));

    el.findWhere(uidEquals('back'))
      .simulate('press');

    expect(onBackPress.mock.calls).toEqual([[]]);
  });

  it('should call onActivityPress when a activity is pressed', () => {
    const onActivityPress = jest.fn();

    const el = shallow(createComponent({ onActivityPress }))
      .find('ActivityList')
      .shallow();

    el.findWhere(child => child.prop('activityId') === 1)
      .simulate('press');

    expect(onActivityPress.mock.calls).toEqual([[1]]);
  });
});
