import React from 'react';
import { Text } from 'react-native';
import Stepper, { Step } from 'src/components/Stepper';


describe('Stepper', () => {
  const createComponent = (props = {}) => (
    <Stepper
      navigationState={{
        index: 1,
        routes: [
          { key: 'STEP_0' },
          { key: 'STEP_1' },
        ],
      }}
      {...props}
    >
      <Step><Text>Step 1</Text></Step>
      <Step><Text>Step 2</Text></Step>
    </Stepper>
  );


  it('should map props correctly', () => {
    expect(render(createComponent())).toMatchSnapshot();
  });

  it('should toggle the rendering of the progressBar', () => {
    expect(render(createComponent({
      hideProgress: true,
    }))).toMatchSnapshot();
  });
});
