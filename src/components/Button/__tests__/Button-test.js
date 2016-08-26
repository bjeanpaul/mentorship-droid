import React from 'react';
import Button from 'src/components/Button';


describe('Button', () => {
  function foo() {}

  it('should render its `title,` and map `onPress`', () => {
    expect(render(
      <Button
        label="margle"
        onPress={foo}
      />
    )).toMatchSnapshot();
  });

  it('should render "light" theme', () => {
    expect(render(
      <Button
        label="margle"
        onPress={foo}
        theme={Button.themes.light}
      />
    )).toMatchSnapshot();
  });

  it('should render "transparent" theme', () => {
    expect(render(
      <Button
        label="margle"
        onPress={foo}
        theme={Button.themes.transparent}
      />
    )).toMatchSnapshot();
  });

  it('should render "inline" layout', () => {
    expect(render(
      <Button
        label="margle"
        onPress={foo}
        layout={Button.layouts.inline}
      />
    )).toMatchSnapshot();
  });

  it('should be disabled', () => {
    expect(render(
      <Button
        label="margle"
        onPress={foo}
        disabled
      />
    )).toMatchSnapshot();
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
