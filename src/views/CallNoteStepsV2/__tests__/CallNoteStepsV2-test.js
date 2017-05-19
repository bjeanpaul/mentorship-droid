import { noop } from 'lodash';
import React from 'react';

import { FormStep } from 'src/components';
import CallNoteStepsV2 from 'src/views/CallNoteStepsV2';
import { createStack, createRoute } from 'src/navigationHelpers';
import { fakeCallNoteV2 } from 'app/scripts/helpers';


describe('CallNoteStepsV2', () => {
  const createComponent = (props = {}) => (
    <CallNoteStepsV2
      steps={createStack([createRoute('A')])}
      routes={{ A: () => <FormStep title="A" /> }}
      callNote={fakeCallNoteV2()}
      onChange={noop}
      onBackPress={noop}
      onNextPress={noop}
      onDonePress={noop}
      {...props}
    />
  );

  it('should render', () => {
    expect(render(createComponent()))
      .toMatchSnapshot();
  });

  describe('getRoute', () => {
    it('should render the step corresponding to the given key', () => {
      const callNote = fakeCallNoteV2();
      const onBackPress = jest.fn();
      const onNextPress = jest.fn();
      const onDonePress = jest.fn();

      const steps = shallow(createComponent({
        callNote,
        onBackPress,
        onNextPress,
        onDonePress,
        routes: {
          A: props => (
            <FormStep
              title="A"
              {...props}
            />
          ),
        },
      }))
      .instance();

      expect(shallow(steps.getRoute('A')).props())
        .toEqual(jasmine.objectContaining({
          callNote,
          onBackPress,
          onNextPress,
          onDonePress,
        }));
    });
  });
});
