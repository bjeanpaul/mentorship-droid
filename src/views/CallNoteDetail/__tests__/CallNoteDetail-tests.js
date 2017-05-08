import React from 'react';
import { noop } from 'lodash';

import CallNoteDetail from 'src/views/CallNoteDetail';
import { fakeCall, fakeCallNote, fakeCallNoteV2, fakeActivity } from 'app/scripts/helpers';

describe('CallNoteDetail', () => {
  const version1CreateComponent = (props = {}) => (
    <CallNoteDetail
      onBackPress={noop}
      callNote={fakeCallNote()}
      call={fakeCall()}
      activity={fakeActivity()}
      {...props}
    />
  );

  const version2CreateComponent = (props = {}) => (
    <CallNoteDetail
      onBackPress={noop}
      callNote={fakeCallNoteV2()}
      call={fakeCall()}
      activity={fakeActivity()}
      {...props}
    />
  );

  it('should render CallNoteV1Detail when passed call note version 1', () => {
    const el = shallow(version1CreateComponent());

    console.log(el);
    expect(el.find('CallNoteV1Detail').length).toEqual(1);
    expect(el.find('CallNoteV2Detail').length).toEqual(0);
  });

  it('should render CallNoteV2Detail when passed call note version 2', () => {
    const el = shallow(version2CreateComponent());

    console.log(el);
    expect(el.find('CallNoteV1Detail').length).toEqual(0);
    expect(el.find('CallNoteV2Detail').length).toEqual(1);
  });
});
