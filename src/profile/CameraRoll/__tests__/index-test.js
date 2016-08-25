import React from 'react';
import CameraRoll from '../index';

describe('CameraRoll', () => {
  function noop() {}

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
