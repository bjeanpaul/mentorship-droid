import { keys } from 'lodash';
import React from 'react';
import { View } from 'react-native';

import { Text, RichText } from 'src/components';
import { richText, richTextTypes } from 'src/api';


describe('RichText', () => {
  it('should render typography', () => {
    expect(render(
      <RichText>{richText()(`
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
      `)}</RichText>
    )).toMatchSnapshot();
  });

  it('should support style overrides', () => {
    const styles = {
      text: { fontSize: 100 },
    };

    expect(render(
      <RichText styles={styles}>{richText()('style overrides')}</RichText>
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
      <RichText rules={rules}>{richText()('rule overrides')}</RichText>
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
        <RichText.Heading1>h1</RichText.Heading1>
        <RichText.Heading2>h2</RichText.Heading2>
        <RichText.Heading3>h3</RichText.Heading3>
        <RichText.Heading4>h4</RichText.Heading4>
        <RichText.Heading5>h5</RichText.Heading5>
        <RichText.Heading6>h6</RichText.Heading6>
        <RichText.Text>text</RichText.Text>
        <RichText.Markdown>*ma**rk**__down__*</RichText.Markdown>
        <RichText.Paragraph>paragraph</RichText.Paragraph>
        <RichText.List>{'list'.split('')}</RichText.List>
        <RichText.NumberedList>{['numbered', 'list']}</RichText.NumberedList>
        <RichText.Image>{'/images/foo.png'}</RichText.Image>
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
        children: content1,
      };

      const el = shallow(<RichText {...props} />);

      expect(el.instance().shouldComponentUpdate({
        ...props,
        children: content1,
      })).toEqual(false);

      expect(el.instance().shouldComponentUpdate({
        ...props,
        children: content2,
      })).toEqual(true);
    });
  });
});
