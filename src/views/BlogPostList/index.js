import moment from 'moment';
import React, { PropTypes } from 'react';
import { View, Image, ScrollView } from 'react-native';

import styles from './styles';
import { ImageUrl } from 'src/api/imageUrl';
import { BaseView, Header, Text } from 'src/components';


const BlogPostList = ({
  blogPosts,
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
            <View key={blog.id} style={styles.blogPost}>
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
};


export default BlogPostList;
