import React from 'react';

import CategoryAbout from 'src/views/CategoryAbout';
import { fakeCategory } from 'app/scripts/helpers';
import images from 'src/constants/images';


describe('CategoryAbout', () => {
  function createComponent(props = {}) {
    return (
      <CategoryAbout
        category={fakeCategory({
          title: 'Level',
          image: images.ONBOARDING_LANDING,
          about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          goal: 'Ut enim ad minim veniam, quis nostrud exercitation',
        })}
        {...props}
      />
    );
  }

  it('should render', () => {
    const el = render(createComponent());
    expect(el).toMatchSnapshot();
  });

  it('should render a fallback if the category does not have an image', () => {
    const el = render(createComponent({ image: null }));
    expect(el).toMatchSnapshot();
  });
});
