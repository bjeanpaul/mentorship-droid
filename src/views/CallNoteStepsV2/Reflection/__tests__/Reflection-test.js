import { noop } from 'lodash';
import React from 'react';

import { fakeCallNoteV2 } from 'app/scripts/helpers';
import Reflection from 'src/views/CallNoteStepsV2/Reflection';


describe('Reflection', () => {
  const createComponent = (props = {}) => (
    <Reflection
      callNote={fakeCallNoteV2()}
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
