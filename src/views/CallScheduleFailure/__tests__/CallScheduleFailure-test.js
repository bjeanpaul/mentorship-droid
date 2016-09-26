import { noop } from 'lodash';
import React from 'react';

import CallScheduleFailure from 'src/views/CallScheduleFailure';


describe('CallScheduleFailure', () => {
  const createComponent = (props = {}) => (
    <CallScheduleFailure
      onDismissPress={noop}
      {...props}
    />
  );

  it('should render', () => {
    expect(render(createComponent())).toMatchSnapshot();
  });
});
