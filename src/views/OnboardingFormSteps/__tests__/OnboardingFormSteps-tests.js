import { noop } from 'lodash';
import React from 'react';
import { Provider } from 'react-redux';
import { fakeStore } from 'app/scripts/helpers';


import {
  Occupation,
  Motivation,
  Inspiration,
  Skills,
  ThreeWords,
} from 'src/views/OnboardingFormSteps';

describe('OnboardingFormSteps', () => {
  const createComponent = (children) => (
    <Provider store={fakeStore()}>
      {children}
    </Provider>
  );

  it('Occupation', () => {
    const el = render(createComponent(
      <Occupation
        jobTitle="Uncle"
        jobSector="Family"
        onChangeText={noop}
      />
    ));
    expect(el).toMatchSnapshot();
  });

  it('Motivation', () => {
    const el = render(createComponent(
      <Motivation
        motivation="To provide for my family"
        onChangeText={noop}
      />
    ));
    expect(el).toMatchSnapshot();
  });

  it('Inspiration', () => {
    const el = render(createComponent(
      <Inspiration
        inspiration="Music, of course"
        onChangeText={noop}
      />
    ));
    expect(el).toMatchSnapshot();
  });

  it('ThreeWords', () => {
    const el = render(createComponent(
      <ThreeWords
        tags="typing thinking understanding"
        onChangeText={noop}
      />
    ));
    expect(el).toMatchSnapshot();
  });

  it('Skills', () => {
    const el = render(createComponent(
      <Skills
        skills="I had a bunch when I was younger, but now I'm old and tired."
        onChangeText={noop}
      />
    ));
    expect(el).toMatchSnapshot();
  });
});
