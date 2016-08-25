import transform from 'src/components/Text/transform';


describe('transform', () => {
  it('should transform text to uppercase if a match is found', () => {
    const styles = [{foo: 'bar'}, 21, 23, void 0, null];

    expect(transform('oOoOO', styles, new Map([
      [21, null],
      [23, 'uppercase'],
    ]))).toEqual('OOOOO');
  });

  it('should support nested styles', () => {
    const styles = [{foo: 'bar'}, [21, [23, void 0, null]]];

    expect(transform('oOoOO', styles, new Map([
      [21, null],
      [23, 'uppercase'],
    ]))).toEqual('OOOOO');
  });

  it('should leave text unchanged if no match is found', () => {
    const styles = [{foo: 'bar'}, 21, void 0, null];
    expect(transform('oOoOO', styles, new Map([
      [23, 'uppercase']
    ]))).toEqual('oOoOO');
  });
});
