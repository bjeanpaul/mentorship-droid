import { noop } from 'lodash';
import React from 'react';

import { CallQuality } from 'src/views/CallNoteSteps';


describe('CallNoteSteps', () => {
  describe('CallQuality', () => {
    it('should render', () => {
      const el = render(
        <CallQuality
          callQuality="Delays"
          onChange={noop}
          onBackPress={noop}
          onNextPress={noop}
        />
      );

      expect(el.toJSON()).toMatchSnapshot();
    });
  });
});
