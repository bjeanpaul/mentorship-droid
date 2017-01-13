import { connect } from 'react-redux';
import Messages from 'src/views/Messages';
import { getMessages, getAuthUserProfile } from 'src/store/helpers';
import { sendMessage } from 'src/actions/messages';


export const mapStateToProps = state => ({
  profile: getAuthUserProfile(state),
  messages: getMessages(state),
});


const propsToActions = {
  onSendPress: sendMessage,
  onRetryPress: sendMessage,
};


export default connect(mapStateToProps, propsToActions)(Messages);
