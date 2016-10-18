import { noop } from 'lodash';
import React from 'react';
import { Provider } from 'react-redux';
import { fakeStore } from 'app/scripts/helpers';


import {
  Reflections,
  Mood,
  Completed,
  Rating,
  CallQuality,
} from 'src/views/CallNoteSteps';

describe('CallNoteSteps', () => {
  const createComponent = (children) => (
    <Provider store={fakeStore()}>
      {children}
    </Provider>
  );

  it('Reflections', () => {
    const el = render(createComponent(
      <Reflections
        reflection="Walk in silence"
        onChangeText={noop}
      />
    ));
    expect(el.toJSON()).toMatchSnapshot();
  });

  it('Mood', () => {
    const el = render(createComponent(
      <Mood
        menteeState="Sad"
        onSelectImage={noop}
      />
    ));
    expect(el.toJSON()).toMatchSnapshot();
  });

  it('Completed', () => {
    const el = render(createComponent(
      <Completed
        objectiveAchieved={void 0}
        objective="None"
        color="pink"
        onSelectImage={noop}
      />
    ));
    expect(el.toJSON()).toMatchSnapshot();
  });

  it('Rating', () => {
    const el = render(createComponent(
      <Rating
        activityHelpful="A lot"
        onChangeText={noop}
      />
    ));
    expect(el.toJSON()).toMatchSnapshot();
  });

  it('CallQuality', () => {
    const el = render(createComponent(
      <CallQuality
        callQuality="Delays"
        onChangeText={noop}
      />
    ));
    expect(el.toJSON()).toMatchSnapshot();
  });
});
