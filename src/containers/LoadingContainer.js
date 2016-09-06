import { connect } from 'react-redux';
import Loading from 'src/views/Loading';


const LoadingContainer = connect()(Loading);


LoadingContainer.hideNav = true;


export default LoadingContainer;
