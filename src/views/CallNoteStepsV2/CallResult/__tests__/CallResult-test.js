import { noop } from 'lodash';
import React from 'react';

import { uidEquals, fakeCallNoteV2 } from 'app/scripts/helpers';
import CallResult from 'src/views/CallNoteStepsV2/CallResult';
import * as constants from 'src/constants/callNotes';


describe('CallResult', () => {
  const createComponent = (props = {}) => (
    <CallResult
      callNote={fakeCallNoteV2()}
      onChange={noop}
      onBackPress={noop}
      onNextPress={noop}
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
        callResult: void 0,
      }),
    }));

    expect(el.find('FormStep').prop('paginationDisabled')).toBe(true);

    el = shallow(createComponent({
      callNote: fakeCallNoteV2({
        callResult: constants.V2_CALL_RESULT_COMPLETED,
      }),
    }));

    expect(el.find('FormStep').prop('paginationDisabled')).toBe(false);
  });

  it('should call onChange() when the rating changes', () => {
    const onChange = jest.fn();

    const el = shallow(createComponent({
      onChange,
    }));

    el.findWhere(uidEquals('callResultItems'))
      .simulate('indexChanged', { index: 1 });

    expect(onChange.mock.calls)
      .toEqual([[{
        callResult: constants.V2_CALL_RESULT_PARTIALLY_COMPLETED,
      }]]);
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

  it('should call onNextPress() when next is pressed', () => {
    const onNextPress = jest.fn();

    const el = shallow(createComponent({ onNextPress }));

    el.find('FormStep')
      .simulate('nextPress');

    expect(onNextPress.mock.calls)
      .toEqual([[]]);
  });
});
