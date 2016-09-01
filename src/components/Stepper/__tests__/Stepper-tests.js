import React from 'react';
import { Text } from 'react-native';
import Stepper, { Step } from 'src/components/Stepper';


describe('Stepper', () => {
  it('should only render one step at a time', () => {
    const el = shallow(
      <Stepper>
        <Step><Text>Step 1</Text></Step>
        <Step><Text>Step 2</Text></Step>
      </Stepper>
    );
    expect(el.find('Step').length).toBe(1);
  });

  it('should render the first step', () => {
    const el = shallow(
      <Stepper>
        <Step><Text>Step 1</Text></Step>
        <Step><Text>Step 2</Text></Step>
      </Stepper>
    );
    expect(el.find('Step').find('Text').html()).toEqual('<Text>Step 1</Text>');
  });

  it('should render step based on index', () => {
    const el = shallow(
      <Stepper index={1}>
        <Step><Text>Step 1</Text></Step>
        <Step><Text>Step 2</Text></Step>
      </Stepper>
    );
    expect(el.find('Step').find('Text').html()).toEqual('<Text>Step 2</Text>');
  });


  it('should render progress bar by default', () => {
    const el = shallow(
      <Stepper>
        <Step><Text>Step 1</Text></Step>
        <Step><Text>Step 2</Text></Step>
      </Stepper>
    );
    expect(el.find('ProgressBar').length).toBe(1);
  });


  it('should toggle the rendering of the progressBar', () => {
    const el = shallow(
      <Stepper showProgress={false}>
        <Step><Text>Step 1</Text></Step>
        <Step><Text>Step 2</Text></Step>
      </Stepper>
    );
    expect(el.find('ProgressBar').length).toBe(0);
  });


});
