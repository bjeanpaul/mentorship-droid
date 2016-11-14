import { connect } from 'react-redux';
import { FormStep } from 'src/components';
import * as actions from 'src/actions/callNote';


export default connect(null, {
  onBackPress: actions.stepBack,
  onNextPress: actions.stepForward,
})(FormStep);
