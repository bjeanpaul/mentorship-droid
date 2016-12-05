import { flow } from 'lodash';
import colors from 'src/constants/colors';
import { makeGradient } from 'src/helpers';
import config from 'src/config';

const { API_BASE_URL } = config;


const imageUrl = url => url
  ? API_BASE_URL + url
  : url;


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


export const parseActivities = activities => activities.map(parseActivity);


export const parseCategoryListResults = flow(parseResults, parseCategories);
export const parseActivityListResults = flow(parseResults, parseActivities);


export const parseSendMessageResult = pendingMsg => data => ({
  ...data,
  pendingId: pendingMsg.id,
});
