import { noop } from 'lodash';
import React from 'react';
import CallNoteList from 'src/views/CallNoteList';
import { uidEquals, fakeCallNote, fakeCall } from 'app/scripts/helpers';


describe('CallNoteList', () => {
  const createComponent = (props = {}) => (
    <CallNoteList
      callsAndCallNotes={[]}
      onViewPress={noop}
      onAddPress={noop}
      onDismissPress={noop}
      {...props}
    />
  );

  const call1 = fakeCall({
    id: 1,
    startTime: '2016-09-28T17:34Z',
  });
  const call2 = fakeCall({ id: 2 });
  const callNote1 = fakeCallNote({
    id: 21,
    call: 1,
  });

  const callsAndCallNotes = [
    {
      callNote: null,
      call: call2,
    }, {
      callNote: callNote1,
      call: call1,
    }];

  it('should render', () => {
    const el = render(createComponent());
    expect(el.toJSON()).toMatchSnapshot();
  });

  it('should render without dismissable button', () => {
    const el = render(createComponent({ notDismissable: true }));
    expect(el.toJSON()).toMatchSnapshot();
  });

  it('should render call notes as rows', () => {
    const el = render(createComponent({ callsAndCallNotes }));
    expect(el.toJSON()).toMatchSnapshot();
  });

  it('should call onDismissPress', () => {
    const onDismissPress = jest.fn();
    const el = shallow(createComponent({ onDismissPress }));

    el.findWhere(uidEquals('dismiss'))
      .simulate('press');

    expect(onDismissPress).toBeCalled();
  });

  it('should call onViewPress when a row with a callNote is tapped', () => {
    const onViewPress = jest.fn();

    const el = shallow(createComponent({
      onViewPress,
      callsAndCallNotes,
    }));

    el.findWhere(child => child.prop('callId') === 1)
      .simulate('press');

    expect(onViewPress).toBeCalled();
  });

  it('should call onAddPress when a row without a callNote is tapped', () => {
    const onAddPress = jest.fn();

    const el = shallow(createComponent({
      onAddPress,
      callsAndCallNotes,
    }));

    el.findWhere(child => child.prop('callId') === 2)
      .simulate('press');

    expect(onAddPress).toBeCalled();
  });
});
