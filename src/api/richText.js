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


richText.heading1 = richText.heading(1);
richText.heading2 = richText.heading(2);
richText.heading3 = richText.heading(3);
richText.heading4 = richText.heading(4);
richText.heading5 = richText.heading(5);
richText.heading6 = richText.heading(6);


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


export default richText;
