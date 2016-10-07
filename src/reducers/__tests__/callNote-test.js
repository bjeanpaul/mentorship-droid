import reduce from 'src/reducers/callNote';
import * as constants from 'src/constants/callNote';


describe('reducers/callNote', () => {
  it('CALL_NOTES_CHANGE_CALL_NOTE', () => {
    const { callNote: { reflections, mood } } = reduce(void 0,
      {
        type: constants.CALL_NOTES_CHANGE_CALL_NOTE,
        payload: {
          reflections: 'Cheese is amazing.',
          mood: 'savage',
        },
      }
    );
    expect(reflections).toEqual('Cheese is amazing.');
    expect(mood).toEqual('savage');
  });
});
