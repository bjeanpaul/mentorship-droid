import React from 'react';
import { shallow } from 'enzyme';
import Button from 'src/components/Button';


describe('Button', () => {
  function foo() {}

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

  it('should be able to tap and fire `onPress`', () => {
    const mockFn = jest.fn();
    const el = shallow(
      <Button
        label="margle"
        onPress={mockFn}
      />
    );
    el.simulate('press');
    expect(mockFn).toBeCalled();
  });
});
