import { noop } from 'lodash';
import React from 'react';

import { fakeCallNoteV2 } from 'app/scripts/helpers';
import CallResult from 'src/views/CallNoteStepsV2/CallResult';


describe('CallResult', () => {
  const createComponent = (props = {}) => (
    <CallResult
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
