import React from 'react';

import CategoryAbout from 'src/views/CategoryAbout';
import { imageUrl } from 'src/api';
import { fakeCategory } from 'app/scripts/helpers';


describe('CategoryAbout', () => {
  function createComponent(props = {}) {
    return (
      <CategoryAbout
        category={fakeCategory({
          title: 'Level',
          image: imageUrl('/foo.jpg'),
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
