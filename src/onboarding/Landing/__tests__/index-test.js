import React from 'react';
import Landing from '../index';

describe('Landing', () => {
  function foo() {}
  function bar() {}
  it('should map `onGetStartedPress` and `onLoginPress`', () => {
    expect(
      <Landing
        onGetStartedPress={foo}
        onLoginPress={bar}
      />
    ).toMatchSnapshot();
  });
});
