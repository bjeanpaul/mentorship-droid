import { flow } from 'lodash';
import colors from 'src/constants/colors';
import { makeGradient } from 'src/helpers';
import imageUrl from './imageUrl';


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


export const parseActivities = activities => activities.map(parseActivity);


export const parseCategoryListResults = flow(parseResults, parseCategories);
export const parseActivityListResults = flow(parseResults, parseActivities);
