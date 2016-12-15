import React from 'react';
import { noop } from 'lodash';
import ActivityList from 'src/components/ActivityList';
import { fakeCategory, fakeActivity, uidEquals } from 'app/scripts/helpers';
import { imageUrl } from 'src/api';


describe('ActivityList', () => {
  function createComponent(props = {}) {
    return (
      <ActivityList
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

  it('should render incomplete activities', () => {
    expect(render(createComponent({
      activities: [
        fakeActivity({
          icon: imageUrl('/foo.jpg'),
          isComplete: false,
        }),
      ],
    }))).toMatchSnapshot();
  });

  it('should render complete activities', () => {
    expect(render(createComponent({
      activities: [
        fakeActivity({
          icon: imageUrl('/foo.jpg'),
          isComplete: true,
        }),
      ],
    }))).toMatchSnapshot();
  });

  it('should render a fallback for incomplete activities without an icon', () => {
    expect(render(createComponent({
      activities: [
        fakeActivity({
          icon: null,
          isComplete: false,
        }),
      ],
    }))).toMatchSnapshot();
  });

  it('should render a fallback for complete activities without an icon', () => {
    expect(render(createComponent({
      activities: [
        fakeActivity({
          icon: null,
          isComplete: true,
        }),
      ],
    }))).toMatchSnapshot();
  });

  it('should call onActivityPress when a activity is pressed', () => {
    const onActivityPress = jest.fn();
    const el = shallow(createComponent({ onActivityPress }));

    el.findWhere(uidEquals('activity:1'))
      .simulate('press');

    expect(onActivityPress.mock.calls).toEqual([[1]]);

    el.findWhere(uidEquals('activity:2'))
      .simulate('press');

    expect(onActivityPress.mock.calls).toEqual([[1], [2]]);
  });
});
