import moment from 'moment';
import React, { PropTypes } from 'react';
import { View, Image, TouchableNativeFeedback, ScrollView } from 'react-native';

import styles from './styles';
import { ImageUrl } from 'src/api/imageUrl';
import { BaseView, Header, Text } from 'src/components';


const BlogPostList = ({
  blogPosts,
  onBlogPostPress,
}) => (
  <BaseView>
      <Header style={Header.themes.dark}>
        <Text style={[Text.types.title, Text.themes.light]}>
          Blog
        </Text>
      </Header>

      <ScrollView>
        <View style={styles.blogPostList}>
          {blogPosts.map(blog => (
            <TouchableNativeFeedback
              key={blog.id}
              uid={`blogPosts:${blog.id}`}
              onPress={() => onBlogPostPress(blog.id)}
            >
              <View style={styles.blogPost}>
                <View style={styles.blogPostDetail}>
                  <Text style={styles.blogPostCreatedAt}>
                    {moment(blog.createdAt).fromNow().toUpperCase()}
                  </Text>

                  <Text style={[Text.types.secondaryTitle, styles.blogPostTitle]}>
                    {blog.title}
                  </Text>
                </View>

                <View style={styles.blogPostThumbnail}>
                  <Image
                    style={styles.blogPostThumbnailImage}
                    source={blog.thumbnail.resize(96, 96).toSource()}
                  />
                </View>
              </View>
            </TouchableNativeFeedback>
          ))}
        </View>
      </ScrollView>
  </BaseView>
);


BlogPostList.propTypes = {
  blogPosts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.instanceOf(ImageUrl),
  })).isRequired,

  onBlogPostPress: PropTypes.func.isRequired,
};


export default BlogPostList;
