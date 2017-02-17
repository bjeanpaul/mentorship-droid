import { connect } from 'react-redux';

import { getBlogPosts } from 'src/store/helpers';
import BlogPostList from 'src/views/BlogPostList';


export const mapStateToProps = state => ({
  blogPosts: getBlogPosts(state)
    .filter(({ isHidden }) => !isHidden),
});


export const propToActions = {
};


export default connect(mapStateToProps, propToActions)(BlogPostList);
