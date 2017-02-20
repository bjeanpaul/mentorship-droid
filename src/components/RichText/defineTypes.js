import pascalCase from 'to-pascal-case';
import { assign, mapKeys, mapValues } from 'lodash';
import React, { PropTypes } from 'react';
import richText, { richTextTypes } from 'src/richText';


const defineType = (type, RichText) => assign(({ content }) => (
  <RichText content={richText(type)(content)} />
), {
  propTypes: { content: PropTypes.any.isRequired },
});


const defineTypes = RichText => {
  const types = mapKeys(richTextTypes, (_, name) => pascalCase(name));
  return mapValues(types, type => defineType(type, RichText));
};


export default defineTypes;
