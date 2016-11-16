import { noop } from 'lodash';
import React from 'react';

import { Completed } from 'src/views/CallNoteSteps';


describe('CallNoteSteps', () => {
  describe('Completed', () => {
    it('should render', () => {
      const el = render(
        <Completed
          objectiveAchieved={void 0}
          objective="None"
          color="pink"
          onSelectImage={noop}
          onBackPress={noop}
          onNextPress={noop}
        />
      );
      expect(el.toJSON()).toMatchSnapshot();
    });
  });
});
