import { noop } from 'lodash';
import React from 'react';
import CallCompleted from 'src/views/CallCompleted';
import { uidEquals } from 'app/scripts/helpers';


describe('CallCompleted', () => {
  const createComponent = (props = {}) => (
    <CallCompleted
      onDismissPress={noop}
      onAddCallNotesPress={noop}
      {...props}
    />
  );

  it('should render', () => {
    const el = render(createComponent());
    expect(el).toMatchSnapshot();
  });

  it('should call onDismissPress when dismiss button is pressed', () => {
    const onDismissPress = jest.fn();
    const el = shallow(createComponent({ onDismissPress }));

    el.findWhere(uidEquals('dismiss'))
      .simulate('press');

    expect(onDismissPress.mock.calls).toEqual([[]]);
  });

  it('should call onAddCallNotesPress when dismiss button is pressed', () => {
    const onAddCallNotesPress = jest.fn();
    const el = shallow(createComponent({ onAddCallNotesPress }));

    el.findWhere(uidEquals('addCallNotes'))
      .simulate('press');

    expect(onAddCallNotesPress.mock.calls).toEqual([[]]);
  });
});
