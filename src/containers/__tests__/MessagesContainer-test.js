import { mapStateToProps } from 'src/containers/MessagesContainer';
import { fakeState, fakeMessage, fakePendingMessage } from 'app/scripts/helpers';


describe('MessagesContainer', () => {
  it('should provide messages', () => {
    const state = fakeState();

    const msg1 = fakeMessage({
      id: 1,
      timestamp: '2016-11-29T09:43:20.311Z',
    });

    const msg2 = fakeMessage({
      id: 2,
      timestamp: '2016-11-30T09:43:20.311Z',
    });

    const msg3 = fakePendingMessage({
      id: 3,
      timestamp: '2016-11-31T09:43:20.311Z',
    });

    state.entities.messages = {
      1: msg1,
      2: msg2,
    };

    state.entities.pendingMessages = {
      3: msg3,
    };

    expect(mapStateToProps(state)).toEqual(jasmine.objectContaining({
      groups: [{
        messages: [msg3, msg2, msg1],
      }],
    }));
  });
});
