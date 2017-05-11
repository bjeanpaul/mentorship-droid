import React from 'react';
import { noop } from 'lodash';

import { imageUrl } from 'src/api';
import CallNoteV2Detail from 'src/views/CallNoteDetail/CallNoteV2Detail';
import { uidEquals, fakeCallNoteV2, fakeCall, fakeActivity } from 'app/scripts/helpers';

describe('CallNoteV2Detail', () => {
  const createComponent = (props = {}) => (
    <CallNoteV2Detail
      callNote={fakeCallNoteV2({ call: 2 })}
      call={fakeCall({
        id: 2,
        activity: 6,
      })}
      activity={fakeActivity({ id: 6 })}
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
