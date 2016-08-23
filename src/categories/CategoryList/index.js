import React, { PropTypes } from 'react';
import { View, TouchableNativeFeedback } from 'react-native';
import { BaseView, Header, Title, Text } from 'src/components';
import styles from './styles';


const CategoryList = ({
  categories,
  onCategoryPress,
}) => (
  <BaseView>
      <Header>
        <Title>Relationship Stages</Title>
      </Header>

      <View style={styles.list}>
        {categories.map(({ id, title, color }) => (
        <TouchableNativeFeedback
          key={id}
          categoryId={id}
          onPress={() => onCategoryPress(id)}
        >
          <View style={[styles.category, { backgroundColor: color }]}>
            <Title>{title}</Title>
          </View>
        </TouchableNativeFeedback>
        ))}
      </View>
  </BaseView>
);


CategoryList.propTypes = {
  categories: PropTypes.array.isRequired,
  onCategoryPress: PropTypes.func.isRequired,
};


export default CategoryList;
