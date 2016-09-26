import { noop } from 'lodash';
import React from 'react';
import { OverlayLoading } from 'src/components';
import { uidEquals } from 'app/scripts/helpers';


describe('OverlayLoading', () => {
  const createComponent = (props = {}) => (
    <OverlayLoading
      title="Waiting for the 7:18…"
      {...props}
    />
  );

  it('should render', () => {
    const el = render(createComponent());
    expect(el).toMatchSnapshot();
  });

  it('should render with a dismiss button', () => {
    const el = shallow(createComponent({ onDismissPress: noop }));
    expect(el).toMatchSnapshot();
  });

  it('should call onDismissPress when dismiss button is pressed', () => {
    const onDismissPress = jest.fn();
    const el = shallow(createComponent({ onDismissPress }));

    el.findWhere(uidEquals('dismiss'))
      .simulate('press');

    expect(onDismissPress.mock.calls).toEqual([[]]);
  });
});
