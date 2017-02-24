import { connect } from 'react-redux';

import { dismissScreen } from 'src/actions/navigation';
import { getBlogPost } from 'src/store/helpers';
import BlogPost from 'src/views/BlogPost';


export const mapStateToProps = (state, { blogPostId }) => ({
  blogPost: getBlogPost(state, blogPostId),
});


export const propToActions = {
  onBackPress: dismissScreen,
};


export default connect(mapStateToProps, propToActions)(BlogPost);
