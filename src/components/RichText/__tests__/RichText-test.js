import React from 'react';
import { RichText } from 'src/components';
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
    expect(render(
      <RichText
        styles={{
          text: { fontSize: 100 },
        }}
      >{richText()(`style overrides`)}</RichText>
    )).toMatchSnapshot();
  });
});
