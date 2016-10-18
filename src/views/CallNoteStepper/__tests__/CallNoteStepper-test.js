import { each, filter } from 'lodash';
import React from 'react';

import { Text } from 'src/components';
import CallNoteStepper from 'src/views/CallNoteStepper';
import { createStack } from 'src/navigationHelpers';
import { fakeCall } from 'app/scripts/helpers';


describe('CallNoteStepper', () => {
  const createDummyComponent = name => () => <Text>{name}</Text>;

  const createSteps = steps => ({
    Reflections: createDummyComponent('Reflections'),
    Mood: createDummyComponent('Mood'),
    Completed: createDummyComponent('Completed'),
    Rating: createDummyComponent('Rating'),
    CallQuality: createDummyComponent('CallQuality'),
    Saving: createDummyComponent('Saving'),
    ...steps,
  });

  const createComponent = props => (
    <CallNoteStepper
      navigationState={createStack()}
      call={fakeCall()}
      steps={createSteps()}
      {...props}
    />
  );

  it('should show all steps when the given call has an activity', () => {
    const steps = createSteps();

    const el = shallow(createComponent({
      call: fakeCall({ activity: 23 }),
      steps,
    }));

    each(steps, step => expect(el.find(step).length).toEqual(1));
  });

  it('should not show activity steps if there is no activity', () => {
    const steps = createSteps();

    const el = shallow(createComponent({
      call: fakeCall({ activity: void 0 }),
      steps,
    }));

    const unshown = filter(steps, step => el.find(step).length === 0);

    expect(unshown).toEqual([
      steps.Completed,
      steps.Rating,
    ]);
  });
});
