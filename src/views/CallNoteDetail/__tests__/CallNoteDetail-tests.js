import React from 'react';
import { noop } from 'lodash';
import CallNoteDetail from 'src/views/CallNoteDetail';
import { uidEquals } from 'app/scripts/helpers';

describe('CallNoteDetail', () => {
  const createComponent = (props = {}) => (
    <CallNoteDetail
      time="2010-10-10T10:10Z"
      objective="Deadbolt"
      icon="http://h.t.t.p.org"
      reflection="When deadbolts awake you from dejavu dreams"
      mood="sad"
      completed
      rating="T'was OK"
      onBackPress={noop}
      {...props}
    />
  );

  it('should render', () => {
    const el = render(createComponent());
    expect(el).toMatchSnapshot();
  });

  it('should exclude the activity views if they are undefined', () => {
    const el = render(createComponent({
      objective: void 0,
      icon: void 0,
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
