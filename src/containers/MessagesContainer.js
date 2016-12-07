import { connect } from 'react-redux';
import Messages from 'src/views/Messages';
import { getMessages } from 'src/store/helpers';
import { sendMessage } from 'src/actions/messages';


// TODO group messages
export const mapStateToProps = state => ({
  groups: [{
    messages: getMessages(state),
  }],
});


const propsToActions = {
  onSendPress: sendMessage,
};


export default connect(mapStateToProps, propsToActions)(Messages);
