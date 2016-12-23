import { partialRight } from 'lodash';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ActivityList from 'src/views/ActivityList';
import { getCategory, getCategoryActivities } from 'src/store/helpers';
import { chooseScheduledCallActivity } from 'src/actions/schedule';
import { dismissScreen } from 'src/actions/navigation';


export const mapStateToProps = (state, { categoryId }) => ({
  category: getCategory(state, categoryId),
  activities: getCategoryActivities(state, categoryId),
});


export const mapDispatchToProps = (dispatch, { context }) => bindActionCreators({
  onActivityPress: partialRight(chooseScheduledCallActivity, context),
  onBackPress: dismissScreen,
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(ActivityList);
