import { noop } from 'lodash';
import React from 'react';
import { Provider } from 'react-redux';

import { fakeStore } from 'app/scripts/helpers';
import { Occupation } from 'src/views/Onboarding';


describe('Occupation', () => {
  const createComponent = (props = {}) => (
    <Provider store={fakeStore()}>
      <Occupation
        jobTitle="Uncle"
        jobSector="Family"
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

