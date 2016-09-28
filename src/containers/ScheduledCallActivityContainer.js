import { connect } from 'react-redux';
import ActivityList from 'src/views/ActivityList';
import { getCategory, getCategoryActivities } from 'src/stores/helpers';
import { chooseScheduledCallActivity } from 'src/actions/schedule';
import { dismissScreen } from 'src/actions/navigation';


export const mapStateToProps = (state, { categoryId }) => ({
  category: getCategory(state, categoryId),
  activities: getCategoryActivities(state, categoryId),
});


export const propToActions = {
  onActivityPress: chooseScheduledCallActivity,
  onBackPress: dismissScreen,
};


export default connect(mapStateToProps, propToActions)(ActivityList);
