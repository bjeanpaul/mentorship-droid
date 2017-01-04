import { richText } from 'src/api';


describe('api/richText', () => {
  it('should serialize to its original form', () => {
    const fn = richText({
      list: richText.list(),
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
      list: richText.list(),
    });

    expect(() => fn([{
      type: 'foo',
      value: 'bar',
    }])).toThrow("Unrecognised rich text type 'foo'");
  });

  it('should support unordered lists', () => {
    const fn = richText({
      list: richText.list(),
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
});
