import React from 'react';
import Button from 'src/components/Button';


describe('Button', () => {
  function foo() {
    // placeholder function
  }

  it('should render its `title,` and map `onPress`', () => {
    expect(
      <Button
        label="margle"
        onPress={foo}
      />
    ).toMatchSnapshot();
  });

  it('should change style with `white` theme', () => {
    expect(
      <Button
        label="margle"
        onPress={foo}
        theme={Button.WhiteTheme}
      />
    ).toMatchSnapshot();
  });

  it('should be disabled', () => {
    expect(
      <Button
        label="margle"
        onPress={foo}
        disabled
      />
    ).toMatchSnapshot();
  });
});
