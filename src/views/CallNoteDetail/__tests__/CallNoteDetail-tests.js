import React from 'react';
import { noop } from 'lodash';
import CallNoteDetail from 'src/views/CallNoteDetail';
import { uidEquals, fakeCallNote, fakeActivity } from 'app/scripts/helpers';

describe('CallNoteDetail', () => {
  const createComponent = (props = {}) => (
    <CallNoteDetail
      callNote={fakeCallNote()}
      activity={fakeActivity()}
      onBackPress={noop}
      {...props}
    />
  );

  it('should render', () => {
    const el = render(createComponent());
    expect(el).toMatchSnapshot();
  });

  it('should exclude the activity views if they are undefined', () => {
    const el = render(createComponent({ activity: void 0 }));
    expect(el).toMatchSnapshot();
  });

  it('should call onBackPress', () => {
    const onBackPress = jest.fn();
    const el = shallow(createComponent({ onBackPress }));

    el.findWhere(uidEquals('back'))
      .simulate('press');

    expect(onBackPress).toBeCalled();
  });
});
