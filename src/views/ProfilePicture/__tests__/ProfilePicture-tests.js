import { noop } from 'lodash';
import { Provider } from 'react-redux';
import { fakeStore } from 'app/scripts/helpers';
import React from 'react';
import ProfilePicture from 'src/views/ProfilePicture';

describe('ProfilePicture', () => {
  const createComponent = (props = {}) => (
    <Provider store={fakeStore()}>
      <ProfilePicture
        profilePicture="path/to/image.png"
        onChoosePhotoPress={noop}
        {...props}
      />
    </Provider>
  );

  it('should map props correctly', () => {
    expect(render(createComponent())).toMatchSnapshot();
  });

  it('should be able to tap and fire `onChoosePhotoPress`', () => {
    const onChoosePhotoPress = jest.fn();
    const el = shallow(
      <ProfilePicture
        profilePicture="path/to/image.png"
        onChoosePhotoPress={onChoosePhotoPress}
      />
    );
    el.find('TouchableWithoutFeedback').at(0).simulate('press');
    expect(onChoosePhotoPress).toBeCalled();
  });
});
