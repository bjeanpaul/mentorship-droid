import { noop } from 'lodash';
import React from 'react';
import ProfilePicture from 'src/views/ProfilePicture';


describe('ProfilePicture', () => {
  const createComponent = (props = {}) => (
    <ProfilePicture
      imagePath="path/to/image.png"
      onNextPress={noop}
      onBackPress={noop}
      onChoosePhotoPress={noop}
      {...props}
    />
  );

  it('should map props correctly', () => {
    expect(render(createComponent())).toMatchSnapshot();
  });

  it('should enable pagination next button if there is an imagePath', () => {
    expect(render(createComponent({
      imagePath: 'path/to/image.png',
    }))).toMatchSnapshot();
  });

  it('should disable pagination next button if there is no imagePath', () => {
    expect(render(createComponent({ imagePath: null }))).toMatchSnapshot();
  });

  it('should be able to tap and fire `onChoosePhotoPress`', () => {
    const onChoosePhotoPress = jest.fn();
    const el = shallow(createComponent({ onChoosePhotoPress }));
    el.find('TouchableWithoutFeedback').simulate('press');
    expect(onChoosePhotoPress.mock.calls).toEqual([[]]);
  });

  it('should call onBackPress when back button is pressed', () => {
    const onBackPress = jest.fn();
    const el = shallow(createComponent({ onBackPress }));

    el.find('Pagination')
      .shallow()
      .find('Button')
      .at(0)
      .simulate('press');

    expect(onBackPress.mock.calls).toEqual([[]]);
  });

  it('should call onNextPress when next button is pressed', () => {
    const onNextPress = jest.fn();
    const el = shallow(createComponent({ onNextPress }));

    el.find('Pagination')
      .shallow()
      .find('Button')
      .at(1)
      .simulate('press');

    expect(onNextPress.mock.calls).toEqual([[]]);
  });
});
