import React from 'react';
import { noop } from 'lodash';
import CategoryList from 'src/categories/CategoryList';


describe('CategoryList', () => {
  function createComponent(props = {}) {
    return (
      <CategoryList
        onCategoryPress={noop}
        categories={[{
          id: 1,
          title: 'Connect',
          color: '#c4cd39',
        }, {
          id: 2,
          title: 'Level',
          color: '#97c13c',
        }]}
        {...props}
      />
    );
  }

  it('should render', () => {
    expect(render(createComponent())).toMatchSnapshot();
  });

  it('should call onCategoryPress when a category is pressed', () => {
    const onCategoryPress = jest.fn();
    const el = shallow(createComponent({ onCategoryPress }));

    el.findWhere(child => child.prop('categoryId') === 1)
      .simulate('press');

    expect(onCategoryPress.mock.calls).toEqual([[1]]);

    el.findWhere(child => child.prop('categoryId') === 2)
      .simulate('press');

    expect(onCategoryPress.mock.calls).toEqual([[1], [2]]);
  });
});
