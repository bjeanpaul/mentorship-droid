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
  describe('Reflections', () => {
    it('should render', () => {
      const el = render(
        <Reflections
          reflection="Walk in silence"
          onChangeText={noop}
          onBackPress={noop}
          onNextPress={noop}
        />
      );
      expect(el.toJSON()).toMatchSnapshot();
    });
  });

  describe('Mood', () => {
    it('should render', () => {
      const el = render(
        <Mood
          menteeState="Sad"
          onSelectImage={noop}
          onBackPress={noop}
          onNextPress={noop}
        />
      );
      expect(el.toJSON()).toMatchSnapshot();
    });
  });

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

  describe('Rating', () => {
    it('should render', () => {
      const el = render(
        <Rating
          activityHelpful="A lot"
          onChangeText={noop}
          onBackPress={noop}
          onNextPress={noop}
        />
      );

      expect(el.toJSON()).toMatchSnapshot();
    });
  });

  describe('CallQuality', () => {
    it('should render', () => {
      const el = render(
        <CallQuality
          callQuality="Delays"
          onChangeText={noop}
          onBackPress={noop}
          onNextPress={noop}
        />
      );

      expect(el.toJSON()).toMatchSnapshot();
    });
  });
});
