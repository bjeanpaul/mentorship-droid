import { noop } from 'lodash';
import React from 'react';
import { OverlayCompleted } from 'src/components';
import { uidEquals } from 'app/scripts/helpers';


describe('OverlayCompleted', () => {
  const createComponent = (props = {}) => (
    <OverlayCompleted
      title="For Those Of You Who Have Never (And Also Those Who Have)"
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
