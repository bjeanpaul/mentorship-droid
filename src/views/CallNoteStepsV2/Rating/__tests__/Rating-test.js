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

  it('should call onChange() when the selection changes', () => {
    const onChange = jest.fn();
    const el = shallow(createComponent({ onChange }));

    el.findWhere(uidEquals('ratingItems'))
      .simulate('select', '3');

    expect(onChange.mock.calls)
      .toEqual([[{ rating: '3' }]]);
  });
});
