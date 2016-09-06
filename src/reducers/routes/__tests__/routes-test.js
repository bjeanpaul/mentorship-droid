jest
  .mock('src/reducers/routes/stacks')
  .mock('src/reducers/routes/navigation')
  .mock('src/reducers/routes/top');

import { identity } from 'lodash';
import reduce from 'src/reducers/routes';
import top from 'src/reducers/routes/top';
import navigation from 'src/reducers/routes/navigation';
import stackReducers from 'src/reducers/routes/stacks';


const createState = (props) => ({
  currentStack: 'FOO',
  stacks: {
    FOO: [],
    BAR: [],
  },
  ...props,
});

describe('src/reducers/routes', () => {
  beforeEach(() => {
    top.mockClear();
    navigation.mockClear();
    stackReducers.mockClear();

    top.mockImplementation(identity);
    navigation.mockImplementation(identity);
    stackReducers.mockImplementation(identity);
  });

  it('should reduce for each stack', () => {
    const state = createState({
      stacks: {
        FOO: [21],
        BAR: [23],
      },
    });

    stackReducers.mockImplementation(() => ({
      FOO: [2],
      BAR: [3],
    }));

    expect(reduce(state, { type: 'BAZ' })).toEqual(createState({
      stacks: {
        FOO: [2],
        BAR: [3],
      },
    }));
  });

  it('should apply the navigation reducer', () => {
    const state = createState({
      currentStack: 'FOO',
      stacks: {
        FOO: [21],
        BAR: [23],
      },
    });

    navigation.mockImplementation(stackState => stackState.concat([2]));

    expect(reduce(state, { type: 'BAZ' })).toEqual(createState({
      currentStack: 'FOO',
      stacks: {
        FOO: [21, 2],
        BAR: [23],
      },
    }));
  });

  it('should apply the top-level route reducer', () => {
    const state = createState({
      currentStack: 'FOO',
      stacks: {
        FOO: [21],
        BAR: [23],
      },
    });

    top.mockImplementation(() => createState({
      currentStack: 'BAR',
      stacks: {
        FOO: [3],
        BAR: [2],
      },
    }));

    expect(reduce(state, { type: 'BAZ' })).toEqual(createState({
      currentStack: 'BAR',
      stacks: {
        FOO: [3],
        BAR: [2],
      },
    }));
  });
});
