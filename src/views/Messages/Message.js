import { delegate } from 'src/helpers';
import * as constants from 'src/constants/messages';
import SendingMessage from './SendingMessage';
import FailedMessage from './FailedMessage';
import InboundMessage from './InboundMessage';
import OutboundMessage from './OutboundMessage';


const PendingMessage = delegate('details.status', [
  [constants.PENDING_MESSAGE_STATUS_SENDING, SendingMessage],
  [constants.PENDING_MESSAGE_STATUS_FAILED, FailedMessage],
]);


const CompleteMessage = delegate('details.direction', [
  [constants.MESSAGE_DIRECTION_INBOUND, InboundMessage],
  [constants.MESSAGE_DIRECTION_OUTBOUND, OutboundMessage],
]);


const Message = delegate('type', [
  [constants.MESSAGE_TYPE_PENDING, PendingMessage],
  [constants.MESSAGE_TYPE_COMPLETE, CompleteMessage],
]);


export default Message;
