import { noop } from 'lodash';
import React from 'react';
import { Provider } from 'react-redux';

import { fakeStore } from 'app/scripts/helpers';
import { Skills } from 'src/views/Onboarding';


describe('Skills', () => {
  const createComponent = (props = {}) => (
    <Provider store={fakeStore()}>
      <Skills
        skills="I had a bunch when I was younger, but now I'm old and tired."
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

