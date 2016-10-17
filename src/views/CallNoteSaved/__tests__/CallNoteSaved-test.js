import { noop } from 'lodash';
import React from 'react';
import CallNoteSaved from 'src/views/CallNoteSaved';


describe('CallNoteSaved', () => {
  const createComponent = (props = {}) => (
    <CallNoteSaved
      onDismissPress={noop}
      {...props}
    />
  );

  it('should render', () => {
    const el = render(createComponent());
    expect(el).toMatchSnapshot();
  });
});
