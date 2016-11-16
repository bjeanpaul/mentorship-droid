import { noop } from 'lodash';
import React from 'react';

import { Rating } from 'src/views/CallNoteSteps';


describe('CallNoteSteps', () => {
  describe('Rating', () => {
    it('should render', () => {
      const el = render(
        <Rating
          activityHelpful="A lot"
          onChange={noop}
          onBackPress={noop}
          onNextPress={noop}
        />
      );

      expect(el.toJSON()).toMatchSnapshot();
    });
  });
});
