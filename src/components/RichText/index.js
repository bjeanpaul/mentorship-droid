import React, { PropTypes } from 'react';
import { View } from 'react-native';
import { delegate } from 'src/helpers';
import Heading from './Heading';


const renderChild = delegate('type', [
  ['heading', Heading],
]);


const RichText = ({
  content,
}) => (
  <View>
    {content.map((child, i) => <View key={i}>{renderChild(child)}</View>)}
  </View>
);


RichText.propTypes = {
  content: PropTypes.array.isRequired,
};


export default RichText;
