import { connect } from 'react-redux';
import Messages from 'src/views/Messages';
import { getMessages } from 'src/store/helpers';
import { sendMessage } from 'src/actions/messages';


export const mapStateToProps = state => ({
  messages: getMessages(state),
});


const propsToActions = {
  onSendPress: sendMessage,
  onRetryPress: sendMessage,
};


export default connect(mapStateToProps, propsToActions)(Messages);
