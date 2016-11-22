import React from 'react';
import { noop } from 'lodash';

import { fakeProfile } from 'app/scripts/helpers';
import { ProfilePicture } from 'src/views/Onboarding';


describe('ProfilePicture', () => {
  const createComponent = (props = {}) => (
    <ProfilePicture
      profile={fakeProfile({ profilePictureUploadPath: 'path/to/image.png' })}
      onChoosePhotoPress={noop}
      onBackPress={noop}
      onNextPress={noop}
      {...props}
    />
  );

  it('should map props correctly', () => {
    expect(render(createComponent()).toJSON()).toMatchSnapshot();
  });

  it('should be able to tap and fire `onChoosePhotoPress`', () => {
    const onChoosePhotoPress = jest.fn();
    const el = shallow(createComponent({ onChoosePhotoPress }));
    el.find('TouchableWithoutFeedback').at(0).simulate('press');
    expect(onChoosePhotoPress.mock.calls).toEqual([[]]);
  });
});
