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


richText.list = (conf = {}) => value => ({
  ordered: false,
  start: void 0,
  type: 'list',
  items: value.map(content => ({
    type: 'text',
    content,
  })),
  ...conf,
});


richText.numberedList = (conf = {}) => richText.list({
  start: 1,
  ordered: true,
  ...conf,
});


export default richText;
