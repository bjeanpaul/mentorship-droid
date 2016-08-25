import React, { Component, PropTypes } from 'react';
import { View, TouchableNativeFeedback } from 'react-native';

import { BaseView, Header, HeaderIcon, Title, Text } from 'src/components';
import CategoryActivityList from 'src/categories/CategoryActivityList';
import CategoryAbout from 'src/categories/CategoryAbout';
import styles from './styles';


const TAB_ACTIVITIES = 'TAB_ACTIVITIES';
const TAB_ABOUT = 'TAB_ABOUT';


class Category extends Component {
  constructor(props) {
    super(props);

    const {
      initialActiveTab = TAB_ABOUT,
    } = props;

    this.state = {
      activeTab: initialActiveTab,
    };
  }

  onTabChange(tab) {
    this.setState({ activeTab: tab });
  }

  render() {
    const { category } = this.props;

    const {
      color,
      title,
    } = category;

    return (
      <BaseView>
        <Header style={[styles.header, { backgroundColor: color }]}>
          <HeaderIcon type={HeaderIcon.types.backLight} style={styles.back} />
          <Title theme={Title.themes.light}>{title}</Title>
        </Header>

        <View style={[styles.tabGroup, { backgroundColor: color }]}>
          <CategoryTab
            tabId={TAB_ACTIVITIES}
            title="Activities"
            onPress={() => this.onTabChange(TAB_ACTIVITIES)}
            active={this.state.activeTab === TAB_ACTIVITIES}
          />

          <CategoryTab
            tabId={TAB_ABOUT}
            title="About"
            onPress={() => this.onTabChange(TAB_ABOUT)}
            active={this.state.activeTab === TAB_ABOUT}
          />
        </View>

        <CategoryTabBody tab={this.state.activeTab} category={category} />
      </BaseView>
    );
  }
}


const CategoryTab = ({
  tabId,
  active,
  title,
  onPress,
}) => (
  <TouchableNativeFeedback onPress={onPress} tabId={tabId}>
    <View style={[styles.tab, active && styles.tabIsActive]}>
      <Text style={[styles.tabTitle, active && styles.tabTitleIsActive]}>{title}</Text>
    </View>
  </TouchableNativeFeedback>
);


const CategoryTabBody = ({
  tab,
  ...props,
}) => {
  switch (tab) {
    case TAB_ACTIVITIES:
      return <CategoryActivityList {...props} />;

    case TAB_ABOUT:
      return <CategoryAbout {...props} />;

    default:
      return null;
  }
};


const tabPropType = PropTypes.oneOf([TAB_ACTIVITIES, TAB_ABOUT]);


Category.propTypes = {
  category: PropTypes.object.isRequired,
  initialActiveTab: tabPropType,
};


CategoryTab.propTypes = {
  tabId: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};


CategoryTabBody.propTypes = {
  tab: tabPropType,
};


export default Category;

export {
  TAB_ACTIVITIES,
  TAB_ABOUT,
};
