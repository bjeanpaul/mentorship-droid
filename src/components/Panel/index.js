import React, { PropTypes } from 'react';
import { View, Image, ScrollView } from 'react-native';

import Text from 'src/components/Text';
import baseStyles, { types } from './styles';
import { mergeStyles } from 'src/helpers';


const Panel = ({
  icon,
  title,
  children,
  scrollable = false,
  numberOfLines,
  styles: customStyles,
}) => {
  const styles = mergeStyles([baseStyles, customStyles]);

  const BodyContainer = scrollable
    ? ScrollView
    : View;

  return (
    <View style={styles.panel}>
      <View style={styles.panelHeader}>
        {icon && <Image source={icon} style={styles.panelIcon} />}

        <Text
          numberOfLines={1}
          style={[Text.uppercase, styles.panelTitle]}
        >
          {title}
        </Text>
      </View>

      <BodyContainer>
        <View style={styles.panelBody}>
          <Text
            style={[Text.types.paragraph, styles.panelBodyContent]}
            numberOfLines={numberOfLines}
          >
            {children}
          </Text>
        </View>
      </BodyContainer>
    </View>
  );
};


Panel.propTypes = {
  icon: PropTypes.any,
  title: PropTypes.string.isRequired,
  children: PropTypes.any,
  styles: PropTypes.any,
  numberOfLines: PropTypes.number,
  scrollable: PropTypes.bool,
};


Panel.types = types;
export default Panel;
