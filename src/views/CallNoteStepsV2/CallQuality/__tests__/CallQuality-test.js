import { noop } from 'lodash';
import React from 'react';

import { uidEquals, fakeCallNoteV2 } from 'app/scripts/helpers';
import * as constants from 'src/constants/callNotes';
import CallQuality from 'src/views/CallNoteStepsV2/CallQuality';


describe('CallQuality', () => {
  const createComponent = (props = {}) => (
    <CallQuality
      callNote={fakeCallNoteV2()}
      onChange={noop}
      onBackPress={noop}
      onDonePress={noop}
      {...props}
    />
  );

  it('should render', () => {
    const el = render(createComponent());
    expect(el.toJSON()).toMatchSnapshot();
  });

  it('should disable the next button if no selection is given', () => {
    let el;

    el = shallow(createComponent({
      callNote: fakeCallNoteV2({
        callQuality: void 0,
      }),
    }));

    expect(el.find('FormStep').prop('paginationDisabled')).toBe(true);

    el = shallow(createComponent({
      callNote: fakeCallNoteV2({
        callQuality: constants.V2_CALL_QUALITY_OK,
      }),
    }));

    expect(el.find('FormStep').prop('paginationDisabled')).toBe(false);
  });

  it('should call onChange() when the selection changes', () => {
    const onChange = jest.fn();
    const el = shallow(createComponent({ onChange }));

    el.findWhere(uidEquals('callQualityItems'))
      .simulate('select', constants.V2_CALL_QUALITY_OK);

    expect(onChange.mock.calls)
      .toEqual([[{ callQuality: constants.V2_CALL_QUALITY_OK }]]);
  });

  it('should call onBackPress() when back is pressed', () => {
    const onBackPress = jest.fn();

    const el = shallow(createComponent({
      onBackPress,
    }));

    el.find('FormStep')
      .simulate('backPress');

    expect(onBackPress.mock.calls)
      .toEqual([[]]);
  });

  it('should call onDonePress() when done is pressed', () => {
    const onDonePress = jest.fn();
    const callNote = fakeCallNoteV2();

    const el = shallow(createComponent({
      onDonePress,
      callNote,
    }));

    el.find('FormStep')
      .simulate('donePress');

    expect(onDonePress.mock.calls)
      .toEqual([[callNote]]);
  });
});
