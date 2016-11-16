import { noop } from 'lodash';
import React from 'react';

import { Mood } from 'src/views/CallNoteSteps';


describe('Mood', () => {
  const createComponent = (props = {}) => (
    <Mood
      menteeState="Sad"
      onChange={noop}
      onBackPress={noop}
      onNextPress={noop}
      {...props}
    />
  );

  it('should render', () => {
    const el = render(createComponent());
    expect(el.toJSON()).toMatchSnapshot();
  });
});
