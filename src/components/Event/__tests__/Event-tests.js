import React from 'react';
import { noop } from 'lodash';

import Event from 'src/components/Event';


describe('Event', () => {
  const createComponent = (props = {}) => (
    <Event
      date="2016-09-16T11:19:17.368442Z"
      icon={23}
      title="pew pew pew"
      blurb="i am a blurb"
      {...props}
    />
  );

  it('should render the props', () => {
    const el = render(createComponent());
    expect(el.toJSON()).toMatchSnapshot();
  });

  it('should render a formatted date if the blurb is undefined', () => {
    const el = render(createComponent({
      date: '2016-09-16T11:19:17.368442Z',
      blurb: void 0,
    }));

    expect(el.toJSON()).toMatchSnapshot();
  });

  it('should render with a "more" indicator if onPress is given', () => {
    const el = render(createComponent({
      onPress: noop,
    }));

    expect(el.toJSON()).toMatchSnapshot();
  });

  it('should render a counter if a count is given', () => {
    const el = render(createComponent({
      count: 23,
    }));

    expect(el.toJSON()).toMatchSnapshot();
  });

  it('should call onPress when pressed', () => {
    const onPress = jest.fn();

    shallow(createComponent({ onPress }))
      .simulate('press');

    expect(onPress.mock.calls).toEqual([[]]);
  });
});
