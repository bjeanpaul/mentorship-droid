import { noop } from 'lodash';
import React from 'react';
import Pagination from 'src/components/Pagination';
import { uidEquals } from 'app/scripts/helpers';


describe('Button', () => {
  const createComponent = (props = {}) => (
      <Pagination
        onBackPress={noop}
        onNextPress={noop}
        onDonePress={noop}
        {...props}
      />
  );

  it('should render props correctly', () => {
    const el = render(createComponent());
    expect(el.toJSON()).toMatchSnapshot();
  });

  it('should support disabling its back button', () => {
    const el = render(createComponent({ backDisabled: true }));
    expect(el.toJSON()).toMatchSnapshot();
  });

  it('should disable its next button if disabled is true', () => {
    const el = render(createComponent({ disabled: true }));
    expect(el.toJSON()).toMatchSnapshot();
  });

  it('should render a done button if last is true', () => {
    const el = render(createComponent({ last: true }));
    expect(el.toJSON()).toMatchSnapshot();
  });

  it('should disable its done button if disabled is true', () => {
    const el = render(createComponent({
      last: true,
      disabled: true,
    }));

    expect(el.toJSON()).toMatchSnapshot();
  });

  it('should call onBackPress when back is pressed', () => {
    const onBackPress = jest.fn();
    const el = shallow(createComponent({ onBackPress }));

    el.findWhere(uidEquals('back'))
      .simulate('press');

    expect(onBackPress).toBeCalled();
  });

  it('should call onNextPress when next is pressed', () => {
    const onNextPress = jest.fn();
    const el = shallow(createComponent({ onNextPress }));

    el.findWhere(uidEquals('next'))
      .simulate('press');

    expect(onNextPress).toBeCalled();
  });

  it('should call onDonePress when done is pressed', () => {
    const onDonePress = jest.fn();

    const el = shallow(createComponent({
      last: true,
      onDonePress,
    }));

    el.findWhere(uidEquals('done'))
      .simulate('press');

    expect(onDonePress).toBeCalled();
  });
});
