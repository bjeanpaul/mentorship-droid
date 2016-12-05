import { noop } from 'lodash';
import { connect } from 'react-redux';
import Messages from 'src/views/Messages';
import { getMessages } from 'src/store/helpers';


// TODO group messages
export const mapStateToProps = state => ({
  groups: [{
    messages: getMessages(state),
  }],
});


const propsToActions = {
  onSendPress: noop,  // TODO
};


export default connect(mapStateToProps, propsToActions)(Messages);
