import { noop } from 'lodash';
import React from 'react';
import { Provider } from 'react-redux';

import { fakeStore } from 'app/scripts/helpers';
import { Motivation } from 'src/views/Onboarding';


describe('Motivation', () => {
  const createComponent = (props = {}) => (
    <Provider store={fakeStore()}>
      <Motivation
        motivation="To provide for my family"
        onChangeText={noop}
        {...props}
      />
    </Provider>
  );

  it('should render', () => {
    const el = render(createComponent());
    expect(el.toJSON()).toMatchSnapshot();
  });
});

