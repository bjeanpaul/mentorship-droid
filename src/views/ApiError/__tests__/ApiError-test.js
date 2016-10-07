import { noop } from 'lodash';
import React from 'react';

import ApiError from 'src/views/ApiError';


describe('ApiError', () => {
  const createComponent = (props = {}) => (
    <ApiError
      onDismissPress={noop}
      {...props}
    />
  );

  it('should render', () => {
    expect(render(createComponent())).toMatchSnapshot();
  });
});
