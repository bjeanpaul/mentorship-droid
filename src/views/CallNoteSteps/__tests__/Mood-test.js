import { noop } from 'lodash';
import React from 'react';

import { Mood } from 'src/views/CallNoteSteps';


describe('CallNoteSteps', () => {
  describe('Mood', () => {
    it('should render', () => {
      const el = render(
        <Mood
          menteeState="Sad"
          onChange={noop}
          onBackPress={noop}
          onNextPress={noop}
        />
      );
      expect(el.toJSON()).toMatchSnapshot();
    });
  });
});
