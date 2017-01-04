import { assign, range, fromPairs } from 'lodash';
import { defaultBlockParse } from 'simple-markdown';
import imageUrl from 'src/api/imageUrl';


const parseItem = ({ type, value }, types) => {
  if (!(type in types)) throw new Error(`Unrecognised rich text type '${type}'`);
  return types[type](value);
};


export const parse = (data, types) => data
  .map(d => parseItem(d, types));


export class RichText {
  constructor(input, tree) {
    this.input = input;
    this.tree = tree;
  }

  toJSON() {
    return this.input;
  }
}


const richText = types => input => new RichText(input, parse(input, types));


richText.markdown = content => defaultBlockParse(content);


richText.text = content => ({
  type: 'text',
  content,
});


richText.heading = level => content => ({
  type: 'heading',
  level,
  content: [richText.text(content)],
});


richText.list = items => ({
  ordered: false,
  start: void 0,
  type: 'list',
  items: items.map(richText.text),
});


richText.numberedList = items => ({
  ...richText.list(items),
  start: 1,
  ordered: true,
});


richText.image = url => ({
  type: 'mentorshipImage',
  url: imageUrl(url),
});


assign(richText, fromPairs(range(1, 7).map(n => [
  `heading${n}`,
  richText.heading(n),
])));


export default richText;
