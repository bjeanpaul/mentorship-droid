import { noop } from 'lodash';
import React from 'react';

import CallNoteStepsV1 from 'src/views/CallNoteStepsV1';
import { createStack } from 'src/navigationHelpers';
import { fakeActivity, fakeCallNote } from 'app/scripts/helpers';


describe('CallNoteStepsV1', () => {
  const createComponent = (props = {}) => (
    <CallNoteStepsV1
      navigationState={createStack()}
      callNote={fakeCallNote()}
      activity={void 0}
      onChange={noop}
      onBackPress={noop}
      onNextPress={noop}
      onDonePress={noop}
      {...props}
    />
  );

  it('should show all steps when the given call has an activity', () => {
    const el = shallow(createComponent({ activity: fakeActivity() }));

    const steps = [
      'Reflections',
      'Mood',
      'Completed',
      'Rating',
      'CallQuality',
    ];

    for (const step of steps) expect(el.find(step).length).toEqual(1);
  });

  it('should not show activity steps if there is no activity', () => {
    const el = shallow(createComponent({ activity: void 0 }));

    const shown = [
      'Reflections',
      'Mood',
      'CallQuality',
    ];

    const unshown = [
      'Completed',
      'Rating',
    ];

    for (const step of shown) expect(el.find(step).length).toEqual(1);
    for (const step of unshown) expect(el.find(step).length).toEqual(0);
  });
});
