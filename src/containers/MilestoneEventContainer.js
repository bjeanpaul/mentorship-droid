import { connect } from 'react-redux';
import { MilestoneEvent } from 'src/components';
import { getCategory } from 'src/stores/helpers';


const mapStateToProps = (state, {
  objectId: categoryId,
  eventType: type,
  occuredAt: date,
}) => {
  const {
    image,
    title,
    color,
  } = getCategory(state, categoryId);

  return {
    type,
    date,
    image,
    title,
    color,
  };
};


export { mapStateToProps };
export default connect(mapStateToProps)(MilestoneEvent);
