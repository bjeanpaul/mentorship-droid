import { noop, first } from 'lodash';
import { connect } from 'react-redux';
import MessageEvent from 'src/views/MessageEvent';
import { getMessage } from 'src/store/helpers';


const mapStateToProps = (state, { events }) => {
  const latestMessage = getMessage(state, first(events).objectId);

  return {
    events,
    latestMessage,
  };
};


const propsToActions = {
  onPress: noop,  // NOOP
};


export { mapStateToProps };
export default connect(mapStateToProps, propsToActions)(MessageEvent);
