import { noop } from 'lodash';
import React from 'react';

import LoadingFailure from 'src/views/LoadingFailure';


describe('LoadingFailure', () => {
  const createComponent = (props = {}) => (
    <LoadingFailure
      onDismissPress={noop}
      {...props}
    />
  );

  it('should render', () => {
    expect(render(createComponent())).toMatchSnapshot();
  });
});
