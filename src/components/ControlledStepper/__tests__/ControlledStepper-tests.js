import React from 'react';

import { FormStep, ControlledStepper } from 'src/components';
import { createStack, createRoute } from 'src/navigationHelpers';


describe('Stepper', () => {
  const createComponent = (props = {}) => (
    <ControlledStepper
      routes={{
        A: () => <FormStep title="A" />,
        B: () => <FormStep title="B" />,
      }}
      navigationState={createStack([
        createRoute('A'),
        createRoute('B'),
      ])}
      {...props}
    />
  );

  it('should render its steps', () => {
    expect(render(createComponent())).toMatchSnapshot();
  });

  it('should call onHardwareBackPress if provided as a prop when back pressed', () => {
    const onHardwareBackPress = jest.fn();

    shallow(createComponent({ onHardwareBackPress }))
      .instance()
      .onHardwareBackPress();

    expect(onHardwareBackPress.mock.calls).toEqual([[]]);
  });
});
