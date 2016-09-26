import { noop } from 'lodash';
import React from 'react';
import CallScheduled from 'src/views/CallScheduled';


describe('CallScheduled', () => {
  const createComponent = (props = {}) => (
    <CallScheduled
      onDismissPress={noop}
      {...props}
    />
  );

  it('should render', () => {
    const el = render(createComponent());
    expect(el).toMatchSnapshot();
  });
});
