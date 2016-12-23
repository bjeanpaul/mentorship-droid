import React from 'react';
import { Text } from 'react-native';
import Stepper, { Step } from 'src/components/Stepper';
import { uidEquals } from 'app/scripts/helpers';


describe('Stepper', () => {
  const createComponent = (props = {}) => (
    <Stepper {...props}>
      <Step uid="step:1"><Text>Step 1</Text></Step>
      <Step uid="step:2"><Text>Step 2</Text></Step>
    </Stepper>
  );

  it('should render its steps', () => {
    expect(render(createComponent())).toMatchSnapshot();
  });

  it('should toggle the rendering of the progressBar', () => {
    expect(render(createComponent({
      hideProgress: true,
    }))).toMatchSnapshot();
  });

  it('should page between steps when page buttons are pressed', () => {
    const el = shallow(createComponent());
    expect(el.state().index).toEqual(0);

    el.find('NavigationStack')
      .shallow()
      .findWhere(uidEquals('step:1'))
      .simulate('nextPress');

    expect(el.state().index).toEqual(1);

    el.find('NavigationStack')
      .shallow()
      .findWhere(uidEquals('step:2'))
      .simulate('backPress');

    expect(el.state().index).toEqual(0);
  });

  it('should clamp the step index betwen the range of steps', () => {
    const el = shallow(createComponent());
    expect(el.state().index).toEqual(0);

    el.find('NavigationStack')
      .shallow()
      .findWhere(uidEquals('step:1'))
      .simulate('backPress');

    expect(el.state().index).toEqual(0);

    el.find('NavigationStack')
      .shallow()
      .findWhere(uidEquals('step:1'))
      .simulate('nextPress');

    el.find('NavigationStack')
      .shallow()
      .findWhere(uidEquals('step:2'))
      .simulate('nextPress');

    expect(el.state().index).toEqual(1);
  });

  describe('onNativeBackPress', () => {
    it('should go back', () => {
      const el = shallow(createComponent());

      el.setState({ index: 1 })
        .instance()
        .onNativeBackPress();

      expect(el.state().index).toEqual(0);
    });

    it('should return false when at step 0', () => {
      let res;
      const el = shallow(createComponent());

      res = el.setState({ index: 1 })
        .instance()
        .onNativeBackPress();

      expect(res).toBe(true);

      res = el.setState({ index: 0 })
        .instance()
        .onNativeBackPress();

      expect(res).toBe(false);
    });
  });
});
