import { flow } from 'lodash';
import colors from 'src/constants/colors';
import { makeGradient } from 'src/helpers';


export const parseResults = ({ results }) => results;


export const parseCategories = categories => {
  const gradient = makeGradient(
    colors.CATEGORY_LIST_GRADIENT_START,
    colors.CATEGORY_LIST_GRADIENT_END,
    categories.length,
  );

  return categories.map(({ color, ...d }, i) => ({
    ...d,
    color: !color
      ? gradient[i]
      : color,
  }));
};


export const parseCategoryListResults = flow(parseResults, parseCategories);
