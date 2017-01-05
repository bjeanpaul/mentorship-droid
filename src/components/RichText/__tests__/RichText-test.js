import React from 'react';
import { Text, RichText } from 'src/components';
import { richText } from 'src/api';


describe('RichText', () => {
  it('should render typography', () => {
    // TODO get underlining working
    // TODO get inline code working
    // TODO get code blocks working
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

        *italics*
        **bold**
        ***bold italics***
        ~~strikeout~~

        > block quote

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
});
