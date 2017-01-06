import { assign, isArray, isString } from 'lodash';
import { defaultBlockParse } from 'simple-markdown';
import imageUrl from 'src/api/imageUrl';


const markdown = content => defaultBlockParse(content);


const text = content => ({
  type: 'text',
  content,
});


const paragraph = content => ({
  type: 'paragraph',
  content: [text(content)],
});


const heading = level => content => ({
  type: 'heading',
  level,
  content: [text(content)],
});


const heading1 = heading(1);
const heading2 = heading(2);
const heading3 = heading(3);
const heading4 = heading(4);
const heading5 = heading(5);
const heading6 = heading(6);


const list = items => ({
  ordered: false,
  start: void 0,
  type: 'list',
  items: items.map(item => [text(item)]),
});


const numberedList = items => ({
  ...list(items),
  start: 1,
  ordered: true,
});


const image = url => ({
  type: 'mentorshipImage',
  url: imageUrl(url),
});


const parseItem = (d, mappings) => {
  if (isString(d)) return markdown(d);

  const { value, type } = d;
  if (!(type in mappings)) throw new Error(`Unrecognised rich text type '${type}'`);
  return mappings[type](value);
};


const types = {
  text,
  markdown,
  paragraph,
  heading,
  list,
  numberedList,
  image,
  heading1,
  heading2,
  heading3,
  heading4,
  heading5,
  heading6,
};


export const parse = (data, mappings) => isArray(data)
  ? data.map(d => parseItem(d, mappings))
  : [parseItem(data, mappings)];


export class RichText {
  constructor(input, tree) {
    this.input = input;
    this.tree = tree;
  }

  toJSON() {
    return this.input;
  }
}


const richText = (mappings = types) => input =>
  new RichText(input, parse(input, mappings));


assign(richText, types);
export default richText;
