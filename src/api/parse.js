import { flow } from 'lodash';
import { map } from 'lodash/fp';
import colors from 'src/constants/colors';
import { makeGradient } from 'src/helpers';
import imageUrl from './imageUrl';
import { MESSAGE_TYPE_COMPLETE } from 'src/constants/messages';


export const parseResults = ({ results }) => results;


export const parseCategory = ({
  image,
  ...d,
}) => ({
  ordinal: null,
  ...d,
  image: imageUrl(image),
});


export const parseActivity = ({
  ...d,
  poster,
  icon,
}) => ({
  ordinal: null,
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
  profilePic: imageUrl(profilePic),
});


export const parseCategoryListResults = flow(parseResults, parseCategories);
export const parseActivityListResults = flow(parseResults, map(parseActivity));
export const parseMessageListResults = flow(parseResults, map(parseMessage));
export const parseProfileListResults = flow(parseResults, map(parseProfile));
