import { connect } from 'react-redux';
import CategoryList from 'src/views/CategoryList';
import { getCategories } from 'src/stores/helpers';
import { chooseScheduledCallCategory } from 'src/actions/schedule';


export const mapStateToProps = state => ({
  categories: getCategories(state),
});


export const propToActions = {
  onCategoryPress: chooseScheduledCallCategory,
};


export default connect(mapStateToProps, propToActions)(CategoryList);
