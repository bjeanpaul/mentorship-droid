jest.mock('CameraRoll');

import React from 'react';
import { CameraRoll as RNCameraRoll } from 'react-native';
import CameraRoll from '../index';

describe('CameraRoll', () => {
  function noop() {}

  beforeEach(() => {
    RNCameraRoll.getPhotos.mockReturnValue(Promise.resolve([
      { node: { image: { uri: 'image/photo/1.png' } } },
      { node: { image: { uri: 'image/photo/2.png' } } },
      { node: { image: { uri: 'image/photo/3.png' } } },
    ]));
  });

  it('should map props correctly', () => {
    expect(render(
      <CameraRoll onPhotoPress={noop} />
    )).toMatchSnapshot();
  });

  it('should be able to tap and fire `onPhotoPress`', () => {
    const onPhotoPress = jest.fn();
    const el = shallow(
      <CameraRoll onPhotoPress={onPhotoPress} />
    );

    //console.log(el.find('TouchableNativeFeedback'));

    el.find('TouchableNativeFeedback').at(1).simulate('press');
    expect(onPhotoPress).toBeCalledWith('image/photo/2.png');
  });
});
