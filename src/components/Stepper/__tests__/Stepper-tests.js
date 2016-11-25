import React from 'react';
import { Text } from 'react-native';
import Stepper, { Step } from 'src/components/Stepper';
import { createStack, createRoute, stepKey } from 'src/navigationHelpers';


describe('Stepper', () => {
  const createComponent = (props = {}) => (
    <Stepper
      navigationState={createStack([
        createRoute(stepKey(0)),
        createRoute(stepKey(1)),
      ])}
      {...props}
    >
      <Step><Text>Step 1</Text></Step>
      <Step><Text>Step 2</Text></Step>
    </Stepper>
  );


  it('should render', () => {
    expect(render(createComponent())).toMatchSnapshot();
  });

  it('should toggle the rendering of the progressBar', () => {
    expect(render(createComponent({
      hideProgress: true,
    }))).toMatchSnapshot();
  });
});
