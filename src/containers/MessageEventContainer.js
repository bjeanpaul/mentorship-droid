import { constant, first } from 'lodash';
import { connect } from 'react-redux';
import MessageEvent from 'src/views/MessageEvent';
import { getMessage } from 'src/store/helpers';
import { changeNavTab } from 'src/actions/navigation';
import { NAV_TAB_CHAT } from 'src/constants/navigation';


const mapStateToProps = (state, { events }) => {
  const latestMessage = getMessage(state, first(events).objectId);

  return {
    events,
    latestMessage,
  };
};


const propsToActions = {
  onPress: constant(changeNavTab(NAV_TAB_CHAT)),
};


export { mapStateToProps };
export default connect(mapStateToProps, propsToActions)(MessageEvent);
