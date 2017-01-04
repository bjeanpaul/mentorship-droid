jest.mock('simple-markdown');

import { richText } from 'src/api';
import { defaultBlockParse } from 'simple-markdown';


describe('api/richText', () => {
  afterEach(() => {
    defaultBlockParse.mockClear();
  });

  it('should serialize to its original form', () => {
    const fn = richText({
      list: richText.list,
    });

    const input = [{
      type: 'list',
      value: [
        'foo',
        'bar',
      ],
    }];

    expect(fn(input).toJSON()).toEqual(input);
  });

  it('should throw error for unrecognised types', () => {
    const fn = richText({
      list: richText.list,
    });

    expect(() => fn([{
      type: 'foo',
      value: 'bar',
    }])).toThrow("Unrecognised rich text type 'foo'");
  });

  it('should support text', () => {
    const fn = richText({
      text: richText.text,
    });

    expect(fn([{
      type: 'text',
      value: 'foo',
    }]).tree).toEqual([{
      type: 'text',
      content: 'foo',
    }]);
  });

  it('should support markdown', () => {
    defaultBlockParse.mockImplementation(content => ({
      type: 'fake-markdown',
      content,
    }));

    const fn = richText({
      text: richText.markdown,
    });

    expect(fn([{
      type: 'text',
      value: '*foo*',
    }]).tree).toEqual([{
      type: 'fake-markdown',
      content: '*foo*',
    }]);
  });

  it('should support unordered lists', () => {
    const fn = richText({
      list: richText.list,
    });

    expect(fn([{
      type: 'list',
      value: [
        'foo',
        'bar',
      ],
    }]).tree).toEqual([{
      type: 'list',
      start: void 0,
      ordered: false,
      items: [{
        type: 'text',
        content: 'foo',
      }, {
        type: 'text',
        content: 'bar',
      }],
    }]);
  });

  it('should support numbered lists', () => {
    const fn = richText({
      numberedList: richText.numberedList,
    });

    expect(fn([{
      type: 'numberedList',
      value: [
        'foo',
        'bar',
      ],
    }]).tree).toEqual([{
      type: 'list',
      start: 1,
      ordered: true,
      items: [{
        type: 'text',
        content: 'foo',
      }, {
        type: 'text',
        content: 'bar',
      }],
    }]);
  });
});
