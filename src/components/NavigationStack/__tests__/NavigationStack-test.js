jest.mock('Animated');

import React, { PropTypes } from 'react';
import { Animated } from 'react-native';

import NavigationStack from 'src/components/NavigationStack';
import { createStack, createRoute, push, pop } from 'src/navigationHelpers';
import { Text } from 'src/components';
import { DEVICE_WIDTH } from 'src/constants/styles';


describe('NavigationStack', () => {
  const A = ({ text }) => <Text>A {text}</Text>;
  const B = ({ text }) => <Text>B {text}</Text>;
  A.propTypes = B.propTypes = { text: PropTypes.string };

  const createComponent = (props = {}) => (
    <NavigationStack
      navigationState={createStack([createRoute('A', { text: 'Foo' })])}
      routes={{
        A,
        B,
      }}
      {...props}
    />);

  const start = jest.fn();

  class MockAnimatedValue {
    constructor() {
      this.value = null;
    }

    setValue(v) {
      this.value = v;
    }

    interpolate(...args) {
      return args;
    }
  }

  beforeEach(() => {
    start.mockClear();
    Animated.Value = MockAnimatedValue;
    Animated.timing.mockClear();
    Animated.timing.mockImplementation(() => ({ start }));
  });

  it('should display a not-found view if the route is not found', () => {
    expect(render(createComponent({
      navigationState: createStack([createRoute('B')]),
      routes: { A },
    }))).toMatchSnapshot();
  });

  it('should transition leftward for backward navigation', () => {
    const navigationState = createStack([
      createRoute('A'),
      createRoute('B'),
    ]);

    const el = shallow(createComponent({ navigationState }));

    const { position } = el.state();

    expect(el.find('A').length).toEqual(0);
    expect(el.find('B').length).toEqual(1);

    el.setProps({ navigationState: pop(navigationState) });

    expect(el.find('A').length).toEqual(1);
    expect(el.find('B').length).toEqual(1);

    expect(position.value).toEqual(1);

    expect(el.prop('style')).toEqual(jasmine.arrayContaining([{
      transform: jasmine.arrayContaining([{
        translateX: [{
          inputRange: [0, 1],
          outputRange: [0, -DEVICE_WIDTH],
        }],
      }]),
    }]));

    expect(Animated.timing.mock.calls).toEqual([[
      position,
      jasmine.objectContaining({ toValue: 0 }),
    ]]);

    expect(start.mock.calls).toEqual([[]]);
  });

  it('should transition rightward for non-backward navigation', () => {
    const navigationState = createStack([createRoute('A')]);
    const el = shallow(createComponent({ navigationState }));
    const { position } = el.state();

    expect(el.find('A').length).toEqual(1);
    expect(el.find('B').length).toEqual(0);

    el.setProps({ navigationState: push(navigationState, createRoute('B')) });

    expect(el.find('A').length).toEqual(1);
    expect(el.find('B').length).toEqual(1);

    expect(position.value).toEqual(0);

    expect(el.prop('style')).toEqual(jasmine.arrayContaining([{
      transform: jasmine.arrayContaining([{
        translateX: [{
          inputRange: [0, 1],
          outputRange: [0, -DEVICE_WIDTH],
        }],
      }]),
    }]));

    expect(Animated.timing.mock.calls).toEqual([[
      position,
      jasmine.objectContaining({ toValue: 1 }),
    ]]);

    expect(start.mock.calls).toEqual([[]]);
  });

  it('should only render the current route if the stack has not changed', () => {
    const navigationState = createStack([createRoute('A')]);
    const el = shallow(createComponent({ navigationState }));

    expect(el.find('A').length).toEqual(1);
    expect(el.find('B').length).toEqual(0);

    el.setProps({ navigationState });

    expect(el.find('A').length).toEqual(1);
    expect(el.find('B').length).toEqual(0);
  });
});
