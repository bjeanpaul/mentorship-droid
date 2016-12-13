import React from 'react';
import Button from 'src/components/Button';
import Icon from 'src/components/Icon';


describe('Button', () => {
  function foo() {}

  it('should render its `title,` and map `onPress`', () => {
    expect(render(
      <Button onPress={foo}>
        margle
      </Button>
    ).toJSON()).toMatchSnapshot();
  });

  it('should render "light" theme', () => {
    expect(render(
      <Button
        onPress={foo}
        styles={Button.themes.light}
      >
        margle
      </Button>
    ).toJSON()).toMatchSnapshot();
  });

  it('should render "transparent" theme', () => {
    expect(render(
      <Button
        onPress={foo}
        styles={Button.themes.transparent}
      >
        margle
      </Button>
    ).toJSON()).toMatchSnapshot();
  });

  it('should render "inline" layout', () => {
    expect(render(
      <Button
        onPress={foo}
        layout={Button.layouts.inline}
      >
        margle
      </Button>
    ).toJSON()).toMatchSnapshot();
  });

  it('should render "stretch" layout', () => {
    expect(render(
      <Button
        onPress={foo}
        layout={Button.layouts.stretch}
      >
        margle
      </Button>
    ).toJSON()).toMatchSnapshot();
  });


  it('should render "small" size', () => {
    expect(render(
      <Button
        onPress={foo}
        styles={Button.sizes.small}
      >
        margle
      </Button>
    ).toJSON()).toMatchSnapshot();
  });

  it('should be disabled', () => {
    expect(render(
      <Button
        onPress={foo}
        disabled
      >
        margle
      </Button>
    ).toJSON()).toMatchSnapshot();
  });

  it('should take any kind of children', () => {
    expect(render(
      <Button
        onPress={foo}
      >
        <Icon type={Icon.types.backOrange} />
        I am text.
      </Button>
    ).toJSON()).toMatchSnapshot();
  });

  it('should be able to tap and fire `onPress`', () => {
    const mockFn = jest.fn();

    const el = shallow(
      <Button onPress={mockFn}>
        margle
      </Button>
    );

    el.simulate('press');
    expect(mockFn).toBeCalled();
  });
});
