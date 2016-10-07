import { connect } from 'react-redux';
import FormStep from 'src/views/FormStep';
import * as actions from 'src/actions/callNote';


export default connect(null, {
  onBackPress: actions.stepBack,
  onNextPress: actions.stepForward,
})(FormStep);
