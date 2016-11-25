import { connect } from 'react-redux';
import Category from 'src/views/Category';
import { getCategory, getCategoryActivities } from 'src/store/helpers';
import { dismissActivityScreen, chooseActivity } from 'src/actions/activities';


const mapStateToProps = (state, { categoryId }) => ({
  category: getCategory(state, categoryId),
  activities: getCategoryActivities(state, categoryId)
    .filter(({ isHidden }) => !isHidden),
});


const propsToActions = {
  onActivityPress: chooseActivity,
  onBackPress: dismissActivityScreen,
};


export { mapStateToProps };
export default connect(mapStateToProps, propsToActions)(Category);
