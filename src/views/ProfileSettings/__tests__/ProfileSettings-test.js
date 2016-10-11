import { noop } from 'lodash';
import React from 'react';

import ProfileSettings from 'src/views/ProfileSettings';
import { uidEquals } from 'app/scripts/helpers';


describe('ProfileSettings', () => {
  const createComponent = (props = {}) => (
    <ProfileSettings
      onBackPress={noop}
      {...props}
    />
  );

  it('should render', () => {
    expect(render(createComponent())).toMatchSnapshot();
  });

  it('should call onBackPress when the back button is pressed', () => {
    const onBackPress = jest.fn();
    const el = shallow(createComponent({ onBackPress }));

    el.findWhere(uidEquals('back'))
      .simulate('press');

    expect(onBackPress.mock.calls).toEqual([[]]);
  });
});
