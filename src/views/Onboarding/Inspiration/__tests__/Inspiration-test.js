import { noop } from 'lodash';
import React from 'react';
import { Provider } from 'react-redux';

import { fakeStore } from 'app/scripts/helpers';
import { Inspiration } from 'src/views/Onboarding';


describe('Inspiration', () => {
  const createComponent = (props = {}) => (
    <Provider store={fakeStore()}>
      <Inspiration
        inspiration="Music, of course"
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

