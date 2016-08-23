import React from 'react';
import { shallow } from 'enzyme';
import CameraRoll from '../index';

describe('CameraRoll', () => {
  function noop() {}

  it('should map props correctly', () => {
    expect(
      <CameraRoll
        initialPhotos={[
          'path/to/photo1.png',
          'path/to/photo2.png',
          'path/to/photo3.png',
        ]}
        onPhotoPress={noop}
      />
    ).toMatchSnapshot();
  });

  it('should be able to tap and fire `onPhotoPress`', () => {
    const onPhotoPress = jest.fn();
    const el = shallow(
      <CameraRoll
        initialPhotos={[
          'path/to/photo1.png',
          'path/to/photo2.png',
          'path/to/photo3.png',
        ]}
        onPhotoPress={onPhotoPress}
      />
    );
    el.find('TouchableNativeFeedback').at(1).simulate('press');
    expect(onPhotoPress).toBeCalledWith('path/to/photo2.png');
  });
});
