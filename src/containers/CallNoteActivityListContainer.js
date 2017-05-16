import { connect } from 'react-redux';
import ActivityList from 'src/views/ActivityList';
import { getCategory, getCategoryActivities } from 'src/store/helpers';
import { chooseCallNoteActivity } from 'src/actions/callNotes';
import { dismissScreen } from 'src/actions/navigation';


export const mapStateToProps = (state, { categoryId }) => ({
  category: getCategory(state, categoryId),
  activities: getCategoryActivities(state, categoryId, { omitHidden: true }),
});


export const mapDispatchToProps = {
  onActivityPress: chooseCallNoteActivity,
  onBackPress: dismissScreen,
};


export default connect(mapStateToProps, mapDispatchToProps)(ActivityList);
