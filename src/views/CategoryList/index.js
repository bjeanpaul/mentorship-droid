import React, { PropTypes } from 'react';
import { View, TouchableNativeFeedback } from 'react-native';
import { BaseView, Header, HeaderIcon, Text } from 'src/components';
import styles from './styles';

const CategoryList = ({
  categories,
  onCategoryPress,
  onBackPress,
}) => (
  <BaseView>
      <Header style={Header.themes.dark}>
        <Text style={[Text.types.title, Text.themes.light]}>
          Relationship Stages
        </Text>

        {
          onBackPress && <HeaderIcon
            uid="back"
            type={HeaderIcon.types.backLight}
            style={styles.back}
            onPress={onBackPress}
          />
        }
      </Header>

      <View style={styles.list}>
        {categories.map(({ id, title, color }) => (
        <TouchableNativeFeedback
          key={id}
          categoryId={id}
          onPress={() => onCategoryPress(id)}
        >
          <View
            style={[
              styles.category,
              { backgroundColor: color },
            ]}
          >
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
  onBackPress: PropTypes.func,
};


export default CategoryList;
