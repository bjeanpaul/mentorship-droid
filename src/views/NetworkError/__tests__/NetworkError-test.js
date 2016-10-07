import { noop } from 'lodash';
import React from 'react';

import NetworkError from 'src/views/NetworkError';


describe('NetworkError', () => {
  const createComponent = (props = {}) => (
    <NetworkError
      onDismissPress={noop}
      {...props}
    />
  );

  it('should render', () => {
    expect(render(createComponent())).toMatchSnapshot();
  });
});
