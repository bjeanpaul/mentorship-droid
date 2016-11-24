import { connect } from 'react-redux';
import CategoryList from 'src/views/CategoryList';
import { getCategories } from 'src/store/helpers';
import { chooseCategory } from 'src/actions/activities';


export const mapStateToProps = state => ({
  categories: getCategories(state)
    .filter(({ isHidden }) => !isHidden),
});


export const propToActions = {
  onCategoryPress: chooseCategory,
};


export default connect(mapStateToProps, propToActions)(CategoryList);
