import React from 'react';
import { noop } from 'lodash';
import CategoryList from 'src/views/CategoryList';
import { fakeCategory, uidEquals } from 'app/scripts/helpers';


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
        }].map(fakeCategory)}
        {...props}
      />
    );
  }

  it('should render', () => {
    expect(render(createComponent())).toMatchSnapshot();
  });

  it('should render with a back button if onBackPress is given', () => {
    expect(render(createComponent({ onBackPress: noop }))).toMatchSnapshot();
  });

  it('should call onCategoryPress when a category is pressed', () => {
    const onCategoryPress = jest.fn();
    const el = shallow(createComponent({ onCategoryPress }));

    el.findWhere(uidEquals('category:1'))
      .simulate('press');

    expect(onCategoryPress.mock.calls).toEqual([[1]]);

    el.findWhere(uidEquals('category:2'))
      .simulate('press');

    expect(onCategoryPress.mock.calls).toEqual([[1], [2]]);
  });

  it('should call onBackPress when the back button is pressed', () => {
    const onBackPress = jest.fn();
    const el = shallow(createComponent({ onBackPress }));

    el.findWhere(uidEquals('back'))
      .simulate('press');

    expect(onBackPress.mock.calls).toEqual([[]]);
  });
});
