import React from 'react';
import { Header, HeaderIcon } from 'src/components';


describe('HeaderIcon', () => {
  it('should render', () => {
    expect(render(
      <Header style={Header.themes.dark}>
        <HeaderIcon type={HeaderIcon.types.backLight} />
      </Header>
    )).toMatchSnapshot();
  });

  it('should support style overriding', () => {
    expect(render(
      <Header style={Header.themes.dark}>
        <HeaderIcon type={HeaderIcon.types.backLight} style={{ left: 48 }} />
      </Header>
    )).toMatchSnapshot();
  });

  it('should call onPress when pressed', () => {
    const onPress = jest.fn();
    const el = shallow(
      <HeaderIcon type={HeaderIcon.types.backLight} onPress={onPress} />
    );

    el.simulate('press');
    expect(onPress.mock.calls).toEqual([[]]);
  });
});
