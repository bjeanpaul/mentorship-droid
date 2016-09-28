import { connect } from 'react-redux';

import NavigationStack from 'src/components/NavigationStack';
import routes from 'src/routes';


export const mapStateToProps = ({
  navigation: { top },
}) => ({
  routes,
  navigationState: top,
});


export default connect(mapStateToProps)(NavigationStack);
