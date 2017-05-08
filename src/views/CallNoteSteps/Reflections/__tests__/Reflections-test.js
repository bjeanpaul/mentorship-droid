import { noop } from 'lodash';
import React from 'react';

import { uidEquals, fakeCallNote } from 'app/scripts/helpers';
import { Reflections } from 'src/views/CallNoteSteps';

describe('Reflections', () => {
  const createComponent = (props = {}) => (
    <Reflections
      callNote={fakeCallNote({ reflection: 'Walk in Silence' })}
      onChange={noop}
      onDismissPress={noop}
      onNextPress={noop}
      {...props}
    />
  );

  it('should render', () => {
    const el = render(createComponent());
    expect(el.toJSON()).toMatchSnapshot();
  });

  it('should call onChange() when input changes', () => {
    const onChange = jest.fn();

    const el = shallow(createComponent({
      onChange,
    }));

    el.findWhere(uidEquals('reflectionInput'))
      .simulate('changeText', 'ok');

    expect(onChange.mock.calls)
      .toEqual([[{ reflection: 'ok' }]]);
  });

  it('should call onDismissPress() when back is pressed', () => {
    const onDismissPress = jest.fn();

    const el = shallow(createComponent({
      onDismissPress,
    }));

    el.find('FormStep')
      .simulate('backPress');

    expect(onDismissPress.mock.calls)
      .toEqual([[]]);
  });

  it('should call onNextPress() when back is pressed', () => {
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
