import { noop } from 'lodash';
import React from 'react';
import { Provider } from 'react-redux';

import { fakeStore } from 'app/scripts/helpers';
import { ThreeWords } from 'src/views/Onboarding';


describe('ThreeWords', () => {
  const createComponent = (props = {}) => (
    <Provider store={fakeStore()}>
      <ThreeWords
        tags="typing thinking understanding"
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

