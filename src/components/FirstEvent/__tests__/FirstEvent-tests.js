import React from 'react';
import FirstEvent from 'src/components/FirstEvent';
import { noop } from 'lodash';

describe('FirstEvent', () => {
  it('should render the props', () => {
    expect(render(
      <FirstEvent
        firstName="John Wurst"
        onGetStartedPress={noop}
      />
    )).toMatchSnapshot();
  });

  it('should be able to tap and fire `onMessagePress`', () => {
    const onGetStartedPress = jest.fn();
    const el = shallow(
      <FirstEvent
        firstName="John Wurst"
        onGetStartedPress={onGetStartedPress}
      />
    );
    el.find('Button').simulate('press');
    expect(onGetStartedPress).toBeCalled();
  });
});
