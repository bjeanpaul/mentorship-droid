import React, { PropTypes } from 'react';
import { View } from 'react-native';
import { BaseView, Link, Text } from 'src/components';
import styles from './styles';


const CategoryList = ({
  categories,
  onCategoryPress,
}) => (
  <BaseView>
      <View style={styles.header}>
        <Text style={styles.text}>Relationship Stages</Text>
      </View>

      <View style={styles.list}>
        {categories.map(({ id, title, color }) => (
        <View
          key={id}
          categoryId={id}
          style={[styles.category, { backgroundColor: color }]}
        >
          <Link
            style={styles.text}
            onPress={() => onCategoryPress(id)}
          >
            {title}
          </Link>
        </View>
        ))}
      </View>
  </BaseView>
);


CategoryList.propTypes = {
  categories: PropTypes.array.isRequired,
  onCategoryPress: PropTypes.func.isRequired,
};


export default CategoryList;
