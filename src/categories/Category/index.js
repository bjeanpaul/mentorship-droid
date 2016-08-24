import React, { PropTypes } from 'react';
import { BaseView, Header, HeaderIcon, Title } from 'src/components';
import styles from './styles';


const Category = ({
  category: {
    title,
    color,
  },
}) => (
  <BaseView>
    <Header style={[styles.header, { backgroundColor: color }]}>
      <HeaderIcon type={HeaderIcon.types.backLight} style={styles.back} />
      <Title theme={Title.themes.light}>{title}</Title>
    </Header>
  </BaseView>
);


Category.propTypes = {
  category: PropTypes.object.isRequired,
};


export default Category;
