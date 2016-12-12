import { delegate } from 'src/helpers';
import * as constants from 'src/constants/messages';
import SendingMessage from './SendingMessage';
import FailedMessage from './FailedMessage';
import InboundMessage from './InboundMessage';
import OutboundMessage from './OutboundMessage';


const renderPendingMessage = delegate('message.details.status', [
  [constants.PENDING_MESSAGE_STATUS_SENDING, SendingMessage],
  [constants.PENDING_MESSAGE_STATUS_FAILED, FailedMessage],
]);


const renderCompleteMessage = delegate('message.details.direction', [
  [constants.MESSAGE_DIRECTION_INBOUND, InboundMessage],
  [constants.MESSAGE_DIRECTION_OUTBOUND, OutboundMessage],
]);


const renderMessage = delegate('message.type', [
  [constants.MESSAGE_TYPE_PENDING, renderPendingMessage],
  [constants.MESSAGE_TYPE_COMPLETE, renderCompleteMessage],
]);


const Message = props => renderMessage(props);


export default Message;
