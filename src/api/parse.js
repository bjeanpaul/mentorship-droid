import { flow, fromPairs } from 'lodash';
import { map } from 'lodash/fp';
import colors from 'src/constants/colors';
import { makeGradient } from 'src/helpers';
import imageUrl from './imageUrl';
import { MESSAGE_TYPE_COMPLETE } from 'src/constants/messages';
import { REQUIRED_PROFILE_FIELDS } from 'src/constants/profile';
import richText from 'src/richText';


export const addOrdinals = list => list
  .map((d, ordinal) => ({
    ordinal,
    ...d,
  }));


export const parseResults = ({ results }) => results;


export const parseCategory = ({
  image,
  ...d,
}) => ({
  ...d,
  image: imageUrl(image),
});


export const parseActivity = ({
  ...d,
  poster,
  icon,
}) => ({
  ...d,
  poster: imageUrl(poster),
  icon: imageUrl(icon),
});


export const parseCategories = categories => {
  const gradient = makeGradient(
    colors.CATEGORY_LIST_GRADIENT_START,
    colors.CATEGORY_LIST_GRADIENT_END,
    categories.length,
  );

  return categories.map(({ color, ...d }, i) => parseCategory({
    ...d,
    color: !color
      ? gradient[i]
      : color,
  }));
};


export const parseMessage = data => {
  const {
    id,
    timeSent: timestamp,
    content,
    ...details,
  } = data;

  return {
    type: MESSAGE_TYPE_COMPLETE,
    id,
    content,
    timestamp,
    details,
  };
};


export const parseProfile = ({ profilePic, ...data }) => ({
  ...data,
  ...fromPairs(REQUIRED_PROFILE_FIELDS.map(name => [name, data[name] || ''])),
  profilePic: imageUrl(profilePic),
});


export const parseBlogPostBodyContent = richText({
  paragraph: richText.markdown,
  heading: richText.heading2,
  list: richText.list,
  numberedList: richText.numberedList,
  image: richText.image,
});


export const parseBlogPost = ({
  image,
  thumbnail,
  bodyContent,
  ...data,
}) => ({
  ...data,
  image: imageUrl(image),
  thumbnail: imageUrl(thumbnail),
  bodyContent: parseBlogPostBodyContent(bodyContent),
});


export const parseActivities = activities => activities.map(parseActivity);


export const parseProfileListResults = flow([
  parseResults,
  map(parseProfile),
  addOrdinals,
]);


export const parseCategoryListResults = flow([
  parseResults,
  parseCategories,
  addOrdinals,
]);


export const parseActivityListResults = flow([
  parseResults,
  map(parseActivity),
  addOrdinals,
]);


export const parseMessageListResults = flow([
  parseResults,
  map(parseMessage),
]);


export const parseBlogPostListResults = flow([
  parseResults,
  map(parseBlogPost),
]);
