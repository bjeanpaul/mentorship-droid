import React from 'react';
import { noop } from 'lodash';

import FirstEvent from 'src/components/FirstEvent';
import { uidEquals } from 'app/scripts/helpers';


describe('FirstEvent', () => {
  const createComponent = (props = {}) => (
    <FirstEvent
      firstName="John Wurst"
      onGetStartedPress={noop}
      {...props}
    />
  );

  it('should render the props', () => {
    expect(render(createComponent())).toMatchSnapshot();
  });

  it('should be able to tap and fire `onGetStartedPress`', () => {
    const onGetStartedPress = jest.fn();
    const el = shallow(createComponent({ onGetStartedPress }));

    el.findWhere(uidEquals('getStarted'))
      .simulate('press');

    expect(onGetStartedPress).toBeCalled();
  });
});
