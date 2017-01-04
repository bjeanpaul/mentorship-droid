jest.mock('simple-markdown');

import { richText, imageUrl } from 'src/api';
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

  it('support arbitrary heading levels', () => {
    const fn = richText({
      heading: richText.heading(23),
    });

    expect(fn([{
      type: 'heading',
      value: 'foo',
    }]).tree).toEqual([{
      type: 'heading',
      level: 23,
      content: [{
        type: 'text',
        content: 'foo',
      }],
    }]);
  });

  it('support heading levels 1-6', () => {
    const fn = richText({
      h1: richText.heading1,
      h2: richText.heading2,
      h3: richText.heading3,
      h4: richText.heading4,
      h5: richText.heading5,
      h6: richText.heading6,
    });

    expect(fn([{
      type: 'h1',
      value: 'foo',
    }, {
      type: 'h2',
      value: 'bar',
    }, {
      type: 'h3',
      value: 'baz',
    }, {
      type: 'h4',
      value: 'quux',
    }, {
      type: 'h5',
      value: 'corge',
    }, {
      type: 'h6',
      value: 'grault',
    }]).tree).toEqual([
      richText.heading(1)('foo'),
      richText.heading(2)('bar'),
      richText.heading(3)('baz'),
      richText.heading(4)('quux'),
      richText.heading(5)('corge'),
      richText.heading(6)('grault'),
    ]);
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

  it('should support images', () => {
    const fn = richText({
      image: richText.image,
    });

    expect(fn([{
      type: 'image',
      value: '/foo.png',
    }]).tree).toEqual([{
      type: 'mentorshipImage',
      url: imageUrl('/foo.png'),
    }]);
  });
});
