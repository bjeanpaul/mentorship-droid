import { noop } from 'lodash';
import React from 'react';
import CallNoteList from 'src/views/CallNoteList';
import { uidEquals, fakeCallNote } from 'app/scripts/helpers';


describe('CallNoteList', () => {
  const createComponent = (props = {}) => (
    <CallNoteList
      callNotes={[]}
      onDismissPress={noop}
      onRowPress={noop}
      {...props}
    />
  );

  it('should render', () => {
    const el = render(createComponent());
    expect(el.toJSON()).toMatchSnapshot();
  });

  it('should render call notes as rows', () => {
    const el = render(createComponent({
      callNotes: [
        fakeCallNote({ id: 1 }),
        fakeCallNote({ id: 2 }),
      ],
    }));
    expect(el.toJSON()).toMatchSnapshot();
  });

  it('should call onDismissPress', () => {
    const onDismissPress = jest.fn();
    const el = shallow(createComponent({ onDismissPress }));

    el.findWhere(uidEquals('dismiss'))
      .simulate('press');

    expect(onDismissPress).toBeCalled();
  });

  it('should call onRowPress when a row is tapped', () => {
    const onRowPress = jest.fn();

    const el = shallow(createComponent({
      onRowPress,
      callNotes: [
        fakeCallNote({ id: 1 }),
        fakeCallNote({ id: 2 }),
      ],
    }));

    el.findWhere(child => child.prop('callNoteId') === 1)
      .simulate('press');

    expect(onRowPress).toBeCalled();
  });
});
