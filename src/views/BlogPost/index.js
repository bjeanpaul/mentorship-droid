import moment from 'moment';
import React, { PropTypes } from 'react';
import { Image, View, ScrollView } from 'react-native';

import { ImageUrl } from 'src/api/imageUrl';
import { BaseView, Header, HeaderIcon, RichText, Text } from 'src/components';
import { RichText as RichTextData } from 'src/richText';
import styles from './styles';

const { Heading1 } = RichText;


const BlogPost = ({
  onBackPress,
  blogPost: {
    id,
    title,
    image,
    createdAt,
    bodyContent,
  },
}) => (
  <BaseView key={`blogPost:${id}`}>
    <ScrollView>
      <Header style={Header.themes.light}>
        <HeaderIcon
          uid="back"
          type={HeaderIcon.types.backDark}
          onPress={onBackPress}
        />
      </Header>

      <Text style={styles.createdAt}>
        {moment(createdAt).fromNow().toUpperCase()}
      </Text>

      <Heading1 content={title} />

      {image.exists() && <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={image.resize(360, 203).toSource()}
        />
      </View>}

      <RichText content={bodyContent} />
    </ScrollView>
  </BaseView>
);


BlogPost.propTypes = {
  onBackPress: PropTypes.func.isRequired,
  blogPost: PropTypes.shape({
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    image: PropTypes.instanceOf(ImageUrl).isRequired,
    bodyContent: PropTypes.instanceOf(RichTextData).isRequired,
  }).isRequired,
};


export default BlogPost;
