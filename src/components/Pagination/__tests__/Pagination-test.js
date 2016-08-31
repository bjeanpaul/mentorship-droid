import React from 'react';
import Pagination from 'src/components/Pagination';


describe('Button', () => {
  function foo() {}
  function bar() {}

  it('should render props correctly', () => {
    expect(render(
      <Pagination
        onBackPress={foo}
        onNextPress={bar}
      />
    )).toMatchSnapshot();
  });

  it('should be disabled', () => {
    expect(render(
      <Pagination
        onBackPress={foo}
        onNextPress={bar}
        disabled
      />
    )).toMatchSnapshot();
  });

  it('should be able to tap and fire `onNextPress`', () => {
    const mockFn = jest.fn();
    const el = shallow(
      <Pagination
        onBackPress={foo}
        onNextPress={mockFn}
      />
    );
    el.find('Button').at(1).simulate('press');
    expect(mockFn).toBeCalled();
  });

  it('should be able to tap and fire `onBackPress`', () => {
    const mockFn = jest.fn();
    const el = shallow(
      <Pagination
        onBackPress={mockFn}
        onNextPress={bar}
      />
    );
    el.find('Button').at(0).simulate('press');
    expect(mockFn).toBeCalled();
  });
});
