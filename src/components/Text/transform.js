import { castArray, flattenDeep, findLast, isUndefined } from 'lodash';


const getTextTransform = (style, transforms) => {
  const styleList = flattenDeep(castArray(style));
  const key = findLast(styleList, k => transforms.has(k));

  return !isUndefined(key)
    ? transforms.get(key)
    : null;
};


const transform = (text, style, transforms) => {
  const textTransform = getTextTransform(style, transforms);

  switch (textTransform) {
    case 'uppercase':
      return text.toUpperCase();

    default:
      return text;
  }
};


export default transform;
