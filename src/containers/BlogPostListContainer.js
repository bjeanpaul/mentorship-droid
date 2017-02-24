import { connect } from 'react-redux';

import { getBlogPosts } from 'src/store/helpers';
import { chooseBlogPost } from 'src/actions/blogPosts';
import BlogPostList from 'src/views/BlogPostList';


export const mapStateToProps = state => ({
  blogPosts: getBlogPosts(state)
    .filter(({ isHidden }) => !isHidden),
});


export const propToActions = {
  onBlogPostPress: chooseBlogPost,
};


export default connect(mapStateToProps, propToActions)(BlogPostList);
