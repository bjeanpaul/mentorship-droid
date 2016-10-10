import React from 'react';
import RadioList from 'src/components/RadioList';
import { noop } from 'lodash';


describe('RadioList', () => {
  const createComponent = (props = {}) => (
    <RadioList
      items={['Dog', 'Cat', 'Monkey']}
      onIndexChanged={noop}
      {...props}
    />
  );

  it('should render props correctly', () => {
    expect(render(createComponent())).toMatchSnapshot();
  });

  it('should select an initial index', () => {
    expect(render(createComponent({
      initialSelectedIndex: 1,
    }))).toMatchSnapshot();
  });

  it('should call `onIndexChanged`', () => {
    const onIndexChanged = jest.fn();
    const el = shallow(createComponent({
      onIndexChanged,
    }));
    expect(onIndexChanged.mock.calls).toEqual([]);
    el.find('TouchableWithoutFeedback').at(1).simulate('press');
    expect(onIndexChanged.mock.calls).toEqual([
      [
        {
          index: 1,
          item: 'Cat',
        },
      ],
    ]);
  });
});
