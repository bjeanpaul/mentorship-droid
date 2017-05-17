import { noop, entries } from 'lodash';
import React from 'react';

import CallNoteSteps, { VERSIONS } from 'src/views/CallNoteSteps';
import { createStack } from 'src/navigationHelpers';
import { fakeCallNote } from 'app/scripts/helpers';


describe('CallNoteSteps', () => {
  const createComponent = (props = {}) => (
    <CallNoteSteps
      steps={createStack()}
      callNote={fakeCallNote()}
      onChange={noop}
      onBackPress={noop}
      onNextPress={noop}
      onDonePress={noop}
      onActivityChange={noop}
      {...props}
    />
  );

  it('should delegate to the relevant call note versions component', () => {
    for (const [version, component] of entries(VERSIONS)) {
      const el = shallow(createComponent({
        callNote: fakeCallNote({ version }),
      }));

      expect(el.find(component).length).toEqual(1);
    }
  });
});
