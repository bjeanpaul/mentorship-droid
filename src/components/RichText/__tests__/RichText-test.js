import { keys } from 'lodash';
import React from 'react';
import { View } from 'react-native';

import richText, { richTextTypes } from 'src/richText';
import { Text, RichText } from 'src/components';


describe('RichText', () => {
  it('should render typography', () => {
    expect(render(
      <RichText
        content={richText()(`
# h1

## h2

### h3

#### h4

##### h5

###### h6

text

[link](http://www.google.com)

*italics via asterisks*
_italics via underscores_
**bold**
***bold italics***
~~strikethrough~~
__underline__
__*underline italics*__
__**underline bold**__
__***underline bold italics***__
\`inlineCode\`

> block quote

\`\`\`
code block
\`\`\`

- unordered
- list

1. numbered
2. list
        `)}
      />
    )).toMatchSnapshot();
  });

  it('should support style overrides', () => {
    const styles = {
      text: { fontSize: 100 },
    };

    expect(render(
      <RichText styles={styles} content={richText()('style overrides')} />
    )).toMatchSnapshot();
  });

  it('should support rule overrides', () => {
    const rules = styles => ({
      text: {
        react: (node, _, state) => (
          <Text key={state.key} style={[styles.text, { color: '#cc3333' }]}>
            {node.content}
          </Text>
        ),
      },
    });

    expect(render(
      <RichText rules={rules} content={richText()('rule overrides')} />
    )).toMatchSnapshot();
  });

  it('should allow for types to be created manually', () => {
    expect(keys(richTextTypes).sort()).toEqual([
      'markdown',
      'text',
      'paragraph',
      'heading1',
      'heading2',
      'heading3',
      'heading4',
      'heading5',
      'heading6',
      'list',
      'numberedList',
      'image',
    ].sort());

    expect(render(
      <View>
        <RichText.Heading1 content="h1" />
        <RichText.Heading2 content="h2" />
        <RichText.Heading3 content="h3" />
        <RichText.Heading4 content="h4" />
        <RichText.Heading5 content="h5" />
        <RichText.Heading6 content="h6" />
        <RichText.Text content="text" />
        <RichText.Markdown content="*ma**rk**__down__*" />
        <RichText.Paragraph content="paragraph" />
        <RichText.List content={'list'.split('')} />
        <RichText.NumberedList content={['numbered', 'list']} />
        <RichText.Image content="/images/foo.png" />
      </View>
    ).toJSON()).toMatchSnapshot();
  });

  describe('shouldComponentUpdate', () => {
    it('should compare props via a SameValueZero comparison', () => {
      const content1 = richText()('foo');
      const content2 = richText()('foo');

      const props = {
        styles: {},
        rules: () => ({}),
        content: content1,
      };

      const el = shallow(<RichText {...props} />);

      expect(el.instance().shouldComponentUpdate({
        ...props,
        content: content1,
      })).toEqual(false);

      expect(el.instance().shouldComponentUpdate({
        ...props,
        content: content2,
      })).toEqual(true);
    });
  });
});
