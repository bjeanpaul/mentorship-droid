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
    <Provider store={fakeStore}>
      {children}
    </Provider>
  );

  it('Reflections', () => {
    const el = render(createComponent(
      <Reflections
        reflections="Walk in silence"
        onChangeText={noop}
      />
    ));
    expect(el).toMatchSnapshot();
  });

  it('Mood', () => {
    const el = render(createComponent(
      <Mood
        mood="Sad"
        onSelectImage={noop}
      />
    ));
    expect(el).toMatchSnapshot();
  });

  it('Completed', () => {
    const el = render(createComponent(
      <Completed
        completed={void 0}
        objective="None"
        color="pink"
        onSelectImage={noop}
      />
    ));
    expect(el).toMatchSnapshot();
  });

  it('CallQuality', () => {
    const el = render(createComponent(
      <Rating
        rating="A lot"
        onChangeText={noop}
      />
    ));
    expect(el).toMatchSnapshot();
  });

  it('CallQuality', () => {
    const el = render(createComponent(
      <CallQuality
        callQuality="Delays"
        onChangeText={noop}
      />
    ));
    expect(el).toMatchSnapshot();
  });
});
