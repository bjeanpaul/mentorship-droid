import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';
import Link from 'src/components/Link';


describe('Link', () => {
  function foo() {}

  it('should render its children', () => {
    expect(
      <Link onPress={foo}>
        <Text>Woop, hoop, poop.</Text>
      </Link>
    ).toMatchSnapshot();
  });

  it('should support style overriding', () => {
    expect(
      <Link
        style={{ fontSize: 23 }}
        onPress={foo}
      />
    ).toMatchSnapshot();
  });

  it('should be able to tap and fire `onPress`', () => {
    const mockFn = jest.fn();
    const el = shallow(
      <Link
        onPress={mockFn}
      />
    );
    el.simulate('press');
    expect(mockFn).toBeCalled();
  });
});
