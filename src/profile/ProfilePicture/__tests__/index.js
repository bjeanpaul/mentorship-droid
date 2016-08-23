import React from 'react';
import { shallow } from 'enzyme';
import ProfilePicture from '../index';

describe('ProfilePicture', () => {
  function noop() {}

  it('should map props correctly', () => {
    expect(
      <ProfilePicture
        imagePath="path/to/image.png"
        onChoosePhotoPress={noop}
      />
    ).toMatchSnapshot();
  });

  it('should be able to tap and fire `onChoosePhotoPress`', () => {
    const onChoosePhotoPress = jest.fn();
    const el = shallow(
      <ProfilePicture
        onChoosePhotoPress={onChoosePhotoPress}
      />
    );
    el.find('TouchableWithoutFeedback').simulate('press');
    expect(onChoosePhotoPress).toBeCalled();
  });
});
