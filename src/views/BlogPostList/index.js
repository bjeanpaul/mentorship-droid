import React from 'react';

import { BaseView, Header, Text } from 'src/components';


const BlogPostList = () => (
  <BaseView>
      <Header style={Header.themes.dark}>
        <Text style={[Text.types.title, Text.themes.light]}>
          Blog
        </Text>
      </Header>
  </BaseView>
);


BlogPostList.propTypes = {
};


export default BlogPostList;
