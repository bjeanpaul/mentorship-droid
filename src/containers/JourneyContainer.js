import { connect } from 'react-redux';
import Journey from 'src/views/Journey';

import noop from 'lodash';


export default connect(void 0, {
  onMessagePress: noop,
  onCallPress: noop,
})(Journey);
