import { noop } from 'lodash';
import React from 'react';

import Failure from 'src/components/Failure';
import { uidEquals } from 'app/scripts/helpers';


describe('Failure', () => {
  const createComponent = (props = {}) => (
    <Failure
      onDismissPress={noop}
      {...props}
    >
    :/
    </Failure>
  );

  it('should render', () => {
    expect(render(createComponent())).toMatchSnapshot();
  });

  it('should call onDismissPress when the back button is pressed', () => {
    const onDismissPress = jest.fn();
    const el = shallow(createComponent({ onDismissPress }));

    el.findWhere(uidEquals('back'))
      .simulate('press');

    expect(onDismissPress.mock.calls).toEqual([[]]);
  });

  it('should call onDismissPress when the dismiss button is pressed', () => {
    const onDismissPress = jest.fn();
    const el = shallow(createComponent({ onDismissPress }));

    el.findWhere(uidEquals('dismiss'))
      .simulate('press');

    expect(onDismissPress.mock.calls).toEqual([[]]);
  });
});
