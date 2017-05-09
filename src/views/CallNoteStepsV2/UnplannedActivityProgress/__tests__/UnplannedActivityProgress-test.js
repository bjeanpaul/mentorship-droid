import { noop } from 'lodash';
import React from 'react';

import { fakeCallNoteV2 } from 'app/scripts/helpers';
import UnplannedActivityProgress from 'src/views/CallNoteStepsV2/UnplannedActivityProgress';


describe('UnplannedActivityProgress', () => {
  const createComponent = (props = {}) => (
    <UnplannedActivityProgress
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
