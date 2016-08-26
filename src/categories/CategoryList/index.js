import React, { PropTypes } from 'react';
import { View, TouchableNativeFeedback } from 'react-native';
import { BaseView, Header, Title, Text } from 'src/components';
import styles from './styles';


const CategoryList = ({
  categories,
  onCategoryPress,
}) => (
  <BaseView>
      <Header style={Header.themes.dark}>
        <Text style={[Text.types.title, Text.themes.light]}>
          Relationship Stages
        </Text>
      </Header>

      <View style={styles.list}>
        {categories.map(({ id, title, color }) => (
        <TouchableNativeFeedback
          key={id}
          categoryId={id}
          onPress={() => onCategoryPress(id)}
        >
          <View style={[styles.category, { backgroundColor: color }]}>
            <Text style={[styles.categoryTitle, Text.themes.light]}>{title}</Text>
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
