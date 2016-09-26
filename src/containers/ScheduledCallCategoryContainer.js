import { connect } from 'react-redux';
import CategoryList from 'src/views/CategoryList';
import { getCategories } from 'src/stores/helpers';
import { chooseScheduledCallCategory } from 'src/actions/schedule';
import { dismissScreen } from 'src/actions/navigation';


export const mapStateToProps = state => ({
  categories: getCategories(state),
});


export const propToActions = {
  onCategoryPress: chooseScheduledCallCategory,
  onBackPress: dismissScreen,
};


export default connect(mapStateToProps, propToActions)(CategoryList);
