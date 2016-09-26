import { connect } from 'react-redux';
import Activity from 'src/views/Activity';
import { getCategory, getActivity } from 'src/stores/helpers';
import { scheduleActivityCall, dismissActivityScreen } from 'src/actions/activities';


const mapStateToProps = (state, { activityId }) => {
  const activity = getActivity(state, activityId);
  const { category: categoryId } = activity;
  const category = getCategory(state, categoryId);

  return {
    category,
    activity,
  };
};


const propsToActions = {
  // TODO
  onSchedulePress: scheduleActivityCall,
  onBackPress: dismissActivityScreen,
};


export { mapStateToProps };
export default connect(mapStateToProps, propsToActions)(Activity);
