jest.mock('CameraRoll');

import React from 'react';
import { CameraRoll as RNCameraRoll } from 'react-native';
import CameraRoll from '../index';

describe('CameraRoll', () => {
  function noop() {}

  const createComponent = props => (
    <CameraRoll
      onPhotoPress={noop}
      initialPhotos={[
        'image/photo/1.png',
        'image/photo/2.png',
        'image/photo/3.png',
      ]}
      {...props}
    />
  );

  beforeEach(() => {
    RNCameraRoll.getPhotos.mockReturnValue(Promise.resolve({ edges: [] }));
  });

  it('should map props correctly', () => {
    expect(render(createComponent())).toMatchSnapshot();
  });

  it('should be able to tap and fire `onPhotoPress`', () => {
    const onPhotoPress = jest.fn();
    const el = shallow(createComponent({ onPhotoPress }));

    el.findWhere(node => node.prop('photoId') === 1)
      .simulate('press');

    expect(onPhotoPress).toBeCalledWith('image/photo/2.png');
  });

  it('should fetch photos from camera roll', async () => {
    RNCameraRoll.getPhotos.mockReturnValue(Promise.resolve({
      edges: [
        { node: { image: { uri: 'image/photo/4.png' } } },
        { node: { image: { uri: 'image/photo/5.png' } } },
        { node: { image: { uri: 'image/photo/6.png' } } },
      ],
    }));

    const el = shallow(createComponent());

    RNCameraRoll.getPhotos.mockClear();
    await el.instance().componentDidMount();

    expect(RNCameraRoll.getPhotos.mock.calls).toEqual([
      [{ first: 25 }],
    ]);

    expect(el.state().photos).toEqual([
      'image/photo/1.png',
      'image/photo/2.png',
      'image/photo/3.png',
      'image/photo/4.png',
      'image/photo/5.png',
      'image/photo/6.png',
    ]);
  });
});
