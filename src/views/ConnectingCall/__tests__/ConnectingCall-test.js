import { noop } from 'lodash';
import React from 'react';
import ConnectingCall from 'src/views/ConnectingCall';
import { uidEquals, fakeActivity } from 'app/scripts/helpers';


describe('ConnectingCall', () => {
  const createComponent = (props = {}) => (
    <ConnectingCall
      onDismissPress={noop}
      {...props}
    />
  );

  it('should render', () => {
    const el = render(createComponent());
    expect(el).toMatchSnapshot();
  });

  it('should render with an activity', () => {
    const el = render(createComponent({ activity: fakeActivity() }));
    expect(el).toMatchSnapshot();
  });

  it('should call onDismissPress when dismiss button is pressed', () => {
    const onDismissPress = jest.fn();
    const el = shallow(createComponent({ onDismissPress }));

    el.findWhere(uidEquals('dismiss'))
      .simulate('press');

    expect(onDismissPress.mock.calls).toEqual([[]]);
  });

  it('should call onActivityReviewPress when review button is pressed', () => {
    const onReviewActivityPress = jest.fn();

    const el = shallow(createComponent({
      activity: fakeActivity(),
      onReviewActivityPress
    }));

    el.findWhere(uidEquals('review'))
      .simulate('press');

    expect(onReviewActivityPress.mock.calls).toEqual([[fakeActivity()]]);
  });
});
