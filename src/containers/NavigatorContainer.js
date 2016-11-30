import { connect } from 'react-redux';

import routes from 'src/routes';
import Navigator from 'src/views/Navigator';
import { changeNavTab } from 'src/actions/navigation';


export const mapStateToProps = ({
  navigation: {
    navigator: {
      activeTab,
    },
  },
}) => ({
  activeTab,
  routes,
});


export default connect(mapStateToProps, {
  onTabPress: changeNavTab,
})(Navigator);
