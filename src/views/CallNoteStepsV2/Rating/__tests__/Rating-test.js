import { noop } from 'lodash';
import React from 'react';

import { uidEquals, fakeCallNoteV2 } from 'app/scripts/helpers';
import Rating from 'src/views/CallNoteStepsV2/Rating';


describe('Rating', () => {
  const createComponent = (props = {}) => (
    <Rating
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
        rating: void 0,
      }),
    }));

    expect(el.find('FormStep').prop('paginationDisabled')).toBe(true);

    el = shallow(createComponent({
      callNote: fakeCallNoteV2({
        rating: '3',
      }),
    }));

    expect(el.find('FormStep').prop('paginationDisabled')).toBe(false);
  });

  it('should call onChange() when the selection changes', () => {
    const onChange = jest.fn();
    const el = shallow(createComponent({ onChange }));

    el.findWhere(uidEquals('ratingItems'))
      .simulate('select', '3');

    expect(onChange.mock.calls)
      .toEqual([[{ rating: '3' }]]);
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

    const el = shallow(createComponent({
      onNextPress,
    }));

    el.find('FormStep')
      .simulate('nextPress');

    expect(onNextPress.mock.calls)
      .toEqual([[]]);
  });
});
