import { noop } from 'lodash';
import React from 'react';
import { Provider } from 'react-redux';
import { fakeStore } from 'app/scripts/helpers';


import {
  Reflections,
} from 'src/views/CallNoteSteps';

describe('CallNoteSteps', () => {
  const createComponent = (children) => (
    <Provider store={fakeStore}>
      {children}
    </Provider>
  );

  it('Reflections', () => {
    const el = render(createComponent(
      <Reflections
        reflections="Walk in silence"
        onChangeText={noop}
      />
    ));
    expect(el).toMatchSnapshot();
  });
});
