import React from 'react';

import CategoryAbout from 'src/views/CategoryAbout';
import { fakeCategory } from 'app/scripts/helpers';
import { CATEGORY_IMAGE } from 'app/scripts/fixtures';


describe('CategoryAbout', () => {
  function createComponent(props = {}) {
    return (
      <CategoryAbout
        category={fakeCategory({
          title: 'Level',
          image: CATEGORY_IMAGE,
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
});
