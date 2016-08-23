import React from 'react';
import { shallow } from 'enzyme';
import Hello from '../index';

describe('Hello', () => {
  function noop() {}

  it('should map props correctly', () => {
    expect(
      <Hello
        name="Jeff"
        onCompleteProfilePress={noop}
      />
    ).toMatchSnapshot();
  });

  it('should be able to tap and fire `onCompleteProfilePress`', () => {
    const onCompleteProfilePress = jest.fn();
    const el = shallow(
      <Hello
        name="Jeff"
        onCompleteProfilePress={onCompleteProfilePress}
      />
    );
    el.find('Button').simulate('press');
    expect(onCompleteProfilePress).toBeCalled();
  });
});
