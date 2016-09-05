import { connect } from 'react-redux';
import Category from 'src/views/Category';
import { getCategory, getCategoryActivities } from 'src/stores/helpers';
import { chooseActivity } from 'src/actions/activities';
import { dismissScreen } from 'src/actions/navigation';


const mapStateToProps = (state, { categoryId }) => ({
  category: getCategory(state, categoryId),
  activities: getCategoryActivities(state, categoryId),
});


const propsToActions = {
  onActivityPress: chooseActivity,
  onBackPress: dismissScreen,
};


export { mapStateToProps };
export default connect(mapStateToProps, propsToActions)(Category);
