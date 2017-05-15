import { noop } from 'lodash';
import React from 'react';

import { uidEquals, fakeCallNoteV2 } from 'app/scripts/helpers';
import ObjectiveAchieved from 'src/views/CallNoteStepsV2/ObjectiveAchieved';


describe('ObjectiveAchieved', () => {
  const createComponent = (props = {}) => (
    <ObjectiveAchieved
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
        objectiveAchieved: void 0,
      }),
    }));

    expect(el.find('FormStep').prop('paginationDisabled')).toBe(true);

    el = shallow(createComponent({
      callNote: fakeCallNoteV2({
        objectiveAchieved: '3',
      }),
    }));

    expect(el.find('FormStep').prop('paginationDisabled')).toBe(false);
  });

  it('should call onChange() when the selection changes', () => {
    const onChange = jest.fn();
    const el = shallow(createComponent({ onChange }));

    el.findWhere(uidEquals('objectiveAchievedItems'))
      .simulate('select', '3');

    expect(onChange.mock.calls)
      .toEqual([[{ objectiveAchieved: '3' }]]);
  });
});
