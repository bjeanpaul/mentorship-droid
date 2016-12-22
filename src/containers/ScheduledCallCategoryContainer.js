import { partialRight } from 'lodash';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CategoryList from 'src/views/CategoryList';
import { getCategories } from 'src/store/helpers';
import { chooseScheduledCallCategory } from 'src/actions/schedule';
import { dismissScreen } from 'src/actions/navigation';


export const mapStateToProps = state => ({
  categories: getCategories(state),
});


export const mapDispatchToProps = (dispatch, { context }) => bindActionCreators({
  onCategoryPress: partialRight(chooseScheduledCallCategory, context),
  onBackPress: dismissScreen,
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
