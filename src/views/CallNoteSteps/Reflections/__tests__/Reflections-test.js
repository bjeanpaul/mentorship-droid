import { noop } from 'lodash';
import React from 'react';

import { Reflections } from 'src/views/CallNoteSteps';


describe('CallNoteSteps', () => {
  describe('Reflections', () => {
    it('should render', () => {
      const el = render(
        <Reflections
          reflection="Walk in silence"
          onChange={noop}
          onBackPress={noop}
          onNextPress={noop}
        />
      );
      expect(el.toJSON()).toMatchSnapshot();
    });
  });
});
