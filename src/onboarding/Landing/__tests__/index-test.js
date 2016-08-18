import React from 'react';
import Landing from '../index';

describe('Landing', () => {
  function foo() {}
  function bar() {}
  it('should map `onGetStarted` and `onLoginPress`', () => {
    expect(
      <Landing
        onGetStarted={foo}
        onLoginPress={bar}
      />
    ).toMatchSnapshot();
  });
});
