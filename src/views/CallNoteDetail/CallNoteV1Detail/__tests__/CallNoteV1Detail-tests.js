import React from 'react';
import { noop } from 'lodash';

import { imageUrl } from 'src/api';
import CallNoteV1Detail from 'src/views/CallNoteDetail/CallNoteV1Detail';
import { uidEquals, fakeCallNote, fakeActivity } from 'app/scripts/helpers';

describe('CallNoteV1Detail', () => {
  const createComponent = (props = {}) => (
    <CallNoteV1Detail
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

  it('should exclude the activity icon if it does not exist', () => {
    const el = render(createComponent({
      activity: fakeActivity({
        icon: imageUrl(null),
      }),
    }));
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
